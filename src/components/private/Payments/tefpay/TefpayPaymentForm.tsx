'use client'
import { useState, useEffect } from "react"
import {sha1} from 'js-sha1'
import { useLocale } from "next-intl"
import { useSession } from "next-auth/react"
import { useTranslations } from "next-intl"

declare global {
    interface Window {
        TefpayIframe: any;
    }
}

export const TefpayPaymentForm = () => {

    const merchantCode = process.env.NEXT_PUBLIC_TEFPAY_PRODUCTION_MERCHANT_CODE
    const merchantSharedkey = process.env.NEXT_PUBLIC_TEFPAY_PRODUCTION_PASSWORD
    const merchantTemplate = process.env.NEXT_PUBLIC_TEFPAY_CODE_TEMPLATE
    const iframe_src = process.env.NEXT_PUBLIC_TEFPAY_IFRAME_SCRIPT
    const iframe_configure_url = process.env.NEXT_PUBLIC_TEFPAY_CONFIGURE_URL
    const trial_amount = process.env.NEXT_PUBLIC_TEFPAY_TRIAL_AMOUNT
    const suscription_amount = process.env.NEXT_PUBLIC_SUSCRIPTION_AMOUNT
    const tefpay_notyfi_url = process.env.NEXT_PUBLIC_TEFPAY_NOTYFI_URL
    const hostname = process.env.NEXT_PUBLIC_HOSTNAME 
    
    const locale = useLocale()
    const { data: session, status } = useSession()
    const t = useTranslations('Payment')

    const [ loading, setLoading ] = useState(false)
    const [ matching_data, setMatchingData ] = useState('')
    const [ signature, setSignature ] = useState('')
    const [ payment_id, setPaymentId ] = useState('')
    const [ payment_token, setPaymentToken ] = useState('')
    const [ payment_description, setPaymentDescription ] = useState('')
    const [ suscription_account, setSuscriptionAccount ] = useState('')
    const [ suscription_description, setSuscriptionDescription ] = useState('')
    const [ user_name, setUserName ] = useState('prueba')
    const [ user_email, setUserEmail ] = useState('prueba@prueba.com')
    
    const [dsmerchant_terminal, setDsMerchantTerminal] = useState('00000001')
    const [dsmerchant_terminalauth, setDsMerchantTerminalAuth] = useState('00000001')
    const terminals: {[key: string]: string} = {
        es: '00000001',
        it: '00000002',
        fr: '00000003',
        uk: '00000004',
        de: '00000005',
        nl: '00000006',
        ie: '00000007',
        ae: '00000008'
    }

    const changeUserName = ( value:string ) => {
        setUserName(value)
        return value
    }

    const createPaymentToken = async ( paymentToken:string ) => {
        
        try{

            const req = await fetch( '/api/service/auth-subscription', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "data": {
                        "create_payment_token": {
                            "payment_token": paymentToken,
                            "user_email": user_email
                        }
                    }
                })
            })
    
            const res = await req.json()
            return res
    
        } catch ( error ) {
            return error
        }

    }

    const cleanEmailString = ( email:string ) => {
    
        email = email.replace(/[ÁÉÍÓÚÜÑáéíóúàèìòùÀÈÍÒÙüñ]/g, function( match ) {
            const replacements: {[key: string]: string} = {'Á': 'A','É': 'E','Í': 'I','Ó': 'O','Ú': 'U','Ü': 'U','Ñ': 'N','á': 'a','é': 'e','í': 'i','ó': 'o','ú': 'u','à': 'a','è': 'e','ì': 'i','ò': 'o','ù': 'u','À': 'A','È': 'E','Ì': 'I','Ò': 'O','Ù': 'U','ü': 'u','ñ': 'n'}
            return replacements[ match ] 
        })
    
        return email

    }

    const createSubscriptionSignature = (
        merchantSharedkey:string, 
        merchantCode:string, 
        amount:string, 
        matchingData:string, 
        CallbackUrl = ""
    ) => {
        const buffer = amount + merchantCode + matchingData + CallbackUrl + merchantSharedkey
        const result = sha1( buffer )
        return result
    }

    useEffect(() => {

        if (status === "loading") 
            setLoading(true)

        else if ( status === "authenticated" ) {
          setUserName(session.user?.name as string)
          setUserEmail(session.user?.email as string)
        }

    }, [session])

    useEffect(() =>{

        const matchingData = String(new Date().toISOString().replace(/[^0-9]/g, '')).padEnd(21, '0')
        const merchantURL = tefpay_notyfi_url
        const signature = createSubscriptionSignature(
            merchantSharedkey as string,
            merchantCode as string,
            trial_amount as string,
            matchingData as string,
            merchantURL as string
        )
        const paymentToken = `${matchingData}-${signature}`

        setSignature( signature )
        setMatchingData( matchingData )
        setSuscriptionAccount( matchingData )
        setPaymentId( matchingData )
        setUserEmail( user_email )
        setPaymentDescription( `NUEVO PAGO EN - /${locale} `)
        setSuscriptionDescription(`NUEVA SUSCRIPCION EN - /${locale} `)

        createPaymentToken(paymentToken).then( ( result ) => {
            if( result.error ) setPaymentToken('')
            else setPaymentToken(`${matchingData}-${signature}`)
        })

    }, [])

    useEffect(() => {
        
        const src = iframe_src
        const script = document.createElement( 'script' )
        
        script.src = src as string
        script.async = true

        setDsMerchantTerminal(terminals[locale])
        setDsMerchantTerminalAuth(terminals[locale])

        document.body.appendChild(script).onload = () => {
            
            const TefpayIframe = window.TefpayIframe
            
            if (TefpayIframe) {
                if (TefpayIframe.init()) {
                    TefpayIframe.configure(iframe_configure_url, "100%")
                    TefpayIframe.load()
                }
            }

            setLoading(false)

        }

        return () => {
            window.TefpayIframe = null
        }

    }, [])

    return (<>

        {/* { loading ? <div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div></div> : null } */}

        <form className="p-2 mb-2 payment-form" role="form" id="tefpayData" autoComplete="true" >

        <input type="hidden" name="Ds_Merchant_TransactionType" value="6"/>
        <input type="hidden" name="Ds_Merchant_Subscription_ProcessingMethod" value="201"/>
        <input type="hidden" name="Ds_Merchant_Subscription_Action" value="C"/>
        <input type="hidden" name="Ds_Merchant_Currency" value="978"/>
        <input type="hidden" name="Ds_Merchant_Amount" value={ trial_amount } />
        <input type="hidden" name="Ds_Merchant_Subscription_ChargeAmount" value={ suscription_amount } />
        <input type="hidden" name="Ds_Merchant_Subscription_RelFirstCharge" value="02D"/>
        <input type="hidden" name="Ds_Merchant_Subscription_PeriodType" value="M"/>
        <input type="hidden" name="Ds_Merchant_Subscription_PeriodInterval" value="1"/>
        <input type="hidden" name="Ds_Merchant_Terminal" value={dsmerchant_terminal}/>
        <input type="hidden" name="Ds_Merchant_TerminalAuth" value={dsmerchant_terminalauth}/>
        <input type="hidden" name="Ds_Merchant_Subscription_Iteration" value="0"/>
        <input type="hidden" name="Ds_Merchant_Url" value={ tefpay_notyfi_url } />
        <input type="hidden" name="Ds_Merchant_UrlOK" value={ `${hostname}${locale}/thanks` } />
        <input type="hidden" name="Ds_Merchant_UrlKO" value={ `${hostname}${locale}/payment?error=true` } />
        <input type="hidden" name="Ds_Merchant_MerchantCode" value={merchantCode} />
        <input type="hidden" name="Ds_Merchant_MerchantCodeTemplate" value={merchantTemplate} />
        <input type="hidden" name="Ds_Merchant_TemplateNumber" value="07" />
        <input type="hidden" name="Ds_Merchant_AdditionalData" value="1" />
        <input type="hidden" name="Ds_Merchant_MatchingData" id="Ds_Merchant_MatchingData"  value={ matching_data } />
        <input type="hidden" name="Ds_Merchant_MerchantSignature" id="Ds_Merchant_MerchantSignature"  value={ signature } />
        <input type="hidden" name="Ds_Merchant_Subscription_Account" id="Ds_Merchant_Subscription_Account" value={ suscription_account } />
        <input type="hidden" name="Ds_Merchant_Subscription_ClientName" id="Ds_Merchant_Subscription_ClientName" value={ user_name } />
        <input type="hidden" name="Ds_Merchant_Subscription_ClientEmail" id="Ds_Merchant_Subscription_ClientEmail" value={ (cleanEmailString( user_email )) } />
        <input type="hidden" name="Ds_Merchant_Subscription_Description" value={ suscription_description } />
        <input type="hidden" name="Ds_Merchant_Description" value={ payment_description } />
        <input type="hidden" name="Ds_Merchant_Subscription_NotifyCostumerByEmail" value="0" />
        <input type="hidden" name="Ds_Merchant_Lang" value={ locale } />
        <input type="hidden" id="Ds_Merchant_Subscription_Enable" name="Ds_Merchant_Subscription_Enable" value="1" />

        <div className="form-group ">
            <div className="text-start">
                <label className="required font-semibold text-sm">
                    {t('name_label')}
                </label>
                <input type="name_lastname" id="name_lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-purple-700 focus:border-none block w-full mt-0 p-3.5" placeholder={t('name_holder')} onChange={(e)=>{
                    changeUserName(e.target.value)
                }} />
            </div>
        </div>

        <div id="tefpayBox"></div>

        </form>  



    </>)

}

export default TefpayPaymentForm
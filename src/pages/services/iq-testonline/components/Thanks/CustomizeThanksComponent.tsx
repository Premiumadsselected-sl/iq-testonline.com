'use client'
import { AppProps } from "next/app"
import { GetStaticPropsContext } from 'next'
import { useLocale, useTimeZone, useTranslations } from "next-intl"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

type Props = AppProps & {
    children: React.ReactNode
}

// Styles

export default function CustomizeThanksComponent({ router, pageProps }: AppProps) {

    const locale = useLocale()
    const t = useTranslations('Thanks') 
    const Zone = useTimeZone() || process.env.NEXT_PUBLIC_TIMEZONE
    const { data: session } = useSession()

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
        locale: locale,
        timeZone: Zone
    }

    // Este metodo se encarga de guardar los datos del pago 
    // y los datos de la subscripcion en la base de datos.
    const savePayment = async ( payment_code:string ) => {
        
        try{

            const request_save_payment = 
            await fetch(`${process.env.NEXT_PUBLIC_SERVICE_ENDPOINT_URL}`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': session?.user.token as string 
                },
                body: JSON.stringify({ 
                    method: 'POST',
                    path: 'payments/payment-flow',
                    params: {
                        payment_code: payment_code,
                        email: session?.user.email
                    }  
                })
            })

            const response = await request_save_payment.json()

            if( !response ) 
                throw response

            return response
    
        } catch ( error ) {
            return error
        }

    }

    useEffect(() => {
            
            const payment_code = router.query.payment_code as string
    
            if( payment_code ) 
                savePayment(payment_code).then( response => {
                    console.log(response)
                    
                    if( response.error ) 
                        router.push(`/${locale}`)

                    // usar pixel de converciones

                })
            
            else
                router.push(`/${locale}`)
            
        }
    , [session])

    return (<>
        
        <div className="wellcome-container flex flex-col justify-center p-14 m-auto">
            <h1 className="text-3xl font-bold text-center">
                {t('title')}
            </h1>
            <p className="text-center">
                {t('description')}
            </p>

        </div>

    </>)

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Thanks', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
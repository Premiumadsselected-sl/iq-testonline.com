import {AppProps} from 'next/app'
import {FormEvent} from 'react'
import {signIn} from 'next-auth/react'
import {useState} from 'react'
import {useLocale, useTimeZone, useTranslations} from 'next-intl'
import Link from 'next/link'

// Styles
import styles from '@/pages/services/iq-testonline/styles/LoginStyles.module.css'

export default function CustomizeLoginForm({  router, pageProps }: AppProps) {

    const locale = useLocale()
    const t = useTranslations('Login') 
    const Zone = useTimeZone() || process.env.NEXT_PUBLIC_TIMEZONE
    const [error, setError] = useState<string>()

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
        locale: locale,
        timeZone: Zone
    }

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (error) setError(undefined)

        const locale = useLocale()
        const formData = new FormData(event.currentTarget)

        signIn('Login', {
            user_email: formData.get('user_email'),
            password: formData.get('password'),
            redirect: false
        }).then((result) => {
            
            if (result?.error) {
                setError(result.error)
                errorMessage(result.error)
                return false
            } 
            
            return successMessage().then(() => {
                return router.push(`/${locale}`)
            })

        })

        return false
  
    }

    async function errorMessage(error: string) {
        
        // Todo: add alerts system or libs
        if ( error === 'invalid-login-credentials' )
            throw new Error(t('invalid-login-credentials'))

        else if ( error === 'too-many-requests' )
            throw new Error(t('too-many-requests'))

        else if ( error === 'invalid-email' ) 
            throw new Error(t('invalid-email'))

        else throw new Error(t('error'))

    }

    async function successMessage() {
        throw new Error(t('success_message'))
    }

    return (
        <section>
            
            <form
                action="/api/auth/callback/credentials"
                method="post"
                onSubmit={onSubmit}
                id="login-form"
                className="login-form"
            >
                
                <div className="w-full lg:max-w-full lg:flex h-[55vh]">
                    <div className="bg-white p-4 flex flex-col leading-normal rounded-l-lg rounded-r-lg lg:rounded-r-none w-full">
                        <div className="grid grid-cols-1 gap-4 md:gap-6" >
                            
                            <span className={styles.titleForm}>{t('title')}</span>
                            
                            <div className="w-full col-span-2">
                                <input 
                                    type="text" 
                                    id="user_email" 
                                    name="user_email" 
                                    className={styles.inputForm} 
                                    placeholder={t('email_holder')} 
                                required />
                            </div>

                            <div className="w-full col-span-2">
                                <input 
                                    type="text" 
                                    id="password" 
                                    name="password" 
                                    className={styles.inputForm} 
                                    placeholder={t('password_holder')} 
                                required />
                            </div>

                            <div className="w-full col-span-2 justify-start">
                                <span className='text-customGray'>
                                    {t('question_account')} 
                                    <Link href={'/register'} 
                                        className='text-blue-600 underline'
                                    >
                                        {t('login_button')}
                                    </Link>
                                </span>
                            </div>

                            {/* TODO: ADD BOX AND LINK TO ACEPT DE POLITICS OF SERVICE */}

                            <div className="col-span-2">
                                <button 
                                    id="login-submit-button" 
                                    className={styles.buttonLogin}
                                    type="submit">
                                    <span>{t('login_button')}</span>
                                </button>
                            </div>

                            <div className="w-full col-span-2">
                                <Link 
                                    href={'/forgot-password'} 
                                    className='text-blue-600'
                                >
                                        {t('forgot_password')}
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div 
                        className="lg:w-[50%] flex-none bg-cover rounded-r-lg text-center" style={{ backgroundImage: 'url(/assets/login/cosmos.jpg)' }} 
                        title="Woman holding a mug"
                    >
                    </div>
                </div>
                
                {/* TODO: RENDER FORM ERRORS WITH STYLED ALERTS */}
                {error && <p 
                    className="login-error-paragraph" 
                    id="login-error-paragraph"> 
                    { t('error', {error}) } 
                </p> }


            </form>
        </section>
    )

}
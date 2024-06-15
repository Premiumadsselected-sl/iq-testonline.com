'use client'
import ServicesAsyncRequest from '@/utils/ServicesAsyncRequest'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import { FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useLocale, useTimeZone, useTranslations } from 'next-intl'
import { toast } from 'react-toastify'
import Link from 'next/link'

// Styles
import styles from '@/pages/services/iq-testonline/styles/RegisterStyles.module.css'

type Props = AppProps & {
    children: React.ReactNode
}

export default function CustomizeRegisterForm({ router, pageProps }: AppProps) {

    const locale = useLocale()
    const t = useTranslations('Register')
    const Zone = useTimeZone() || process.env.NEXT_PUBLIC_TIMEZONE
    const [error, setError] = useState<string>()

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
        locale: locale,
        timeZone: Zone
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        
        event.preventDefault()

        if (error) setError(undefined)

        const formData = new FormData(event.currentTarget)

        const new_register = await ServicesAsyncRequest({
            method: 'POST', 
            path:'new-register',
            body: JSON.stringify({ 
                name: formData.get('user_name'),
                email: formData.get('email'), 
                password: formData.get('password')
            })
        })
          
        if ( !new_register.ok ) {
            setError(new_register.error)
            errorMessage(new_register.error)
            return false
        }
          
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        }).then((res) => {
        
            if (res?.error) {
                setError(res.error)
                errorMessage(res.error)
                return
            }
        
            return successMessage().then(() => {
               return router.push( `/${locale}/payment`)
            })
        
        })

        return false

    }

    async function errorMessage(error: string) {
        return toast.error(t('error', { error }))
    }

    async function successMessage() {
        toast.success(t('success_message'))
    }

    return (
        <section>

            <form
                action="/api/auth/callback/credentials"
                method="post"
                onSubmit={onSubmit}
            >

                <div className="w-full lg:max-w-full lg:flex h-[55vh]">
                    <div className="bg-white p-4 flex flex-col leading-normal rounded-l-lg rounded-r-lg lg:rounded-r-none w-full border-customBorderGray border-[1px] shadow-md">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6" >

                            <span className={styles.titleForm}>
                                {t('title')}
                            </span>

                            <div className="w-full col-span-2 lg:col-span-1">
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    className={styles.inputForm}
                                    placeholder={t('user_holder')}
                                    required />
                            </div>

                            <div className="w-full col-span-2 lg:col-span-1">
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

                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    id="register-submit-button"
                                    className={styles.buttonRegister}
                                >
                                    {t('register_button')}
                                </button>
                            </div>

                            <div className="w-full col-span-2">

                                <span className='text-customGray'>
                                    {t('answer_account')}&nbsp;
                                    <Link
                                        href={'/login'}
                                        className='text-blue-600 underline'
                                    >
                                        {t('login_link')}
                                    </Link>
                                </span>

                            </div>
                        </div>
                    </div>
                    <div
                        className="lg:w-[50%] flex-none bg-cover rounded-r-lg text-center" style={{ backgroundImage: 'url(/assets/login/cosmos.jpg)' }}
                        title="Woman holding a mug">
                    </div>
                </div>

                {/* TODO: RENDER FORM ERRORS WITH STYLED ALERTS */}
                {error && <p
                    className="register-error-paragraph"
                    id="register-error-paragraph">
                    {t('error', { error })}
                </p>}

            </form>

        </section>

    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Register', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
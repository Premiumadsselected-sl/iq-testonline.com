'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useLocale, useTimeZone, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Link from 'next/link'
import styles from '@/pages/services/iq-testonline/styles/LoginStyles.module.css'

type Props = AppProps & {
    children: React.ReactNode
}

export default function CustomizeLoginForm({ pageProps }: AppProps) {

    const locale = useLocale()
    const t = useTranslations('Login')
    const Zone = useTimeZone() || process.env.NEXT_PUBLIC_TIMEZONE
    const [error, setError] = useState<string>()
    const router = useRouter()

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
               return router.push(`/${locale}`)
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
                id="login-form"
                className="login-form"
            >

                <div className="w-full lg:max-w-full lg:flex h-[55vh]">
                    <div className="bg-white p-4 flex flex-col leading-normal rounded-l-lg rounded-r-lg lg:rounded-r-none w-full border-customBorderGray border-[1px] shadow-md">
                        <div className="grid grid-cols-1 gap-4 md:gap-6" >

                            <span className={styles.titleForm}>{t('title')}</span>

                            <div className="w-full col-span-2">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
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
                                    {t('question_account')}&nbsp;
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
                        className="lg:w-[50%] flex-none bg-cover rounded-r-lg text-center" 
                        style={{ backgroundImage: 'url(/assets/login/brain-5870352_640.jpg)' }}
                        title="Woman holding a mug"
                    >
                    </div>
                </div>

                {/* SHOW ERROR  WITH TOAST */}
                { error && toast.error( t('error', { error }) ) }

                {/* SHOW ERROR ON PAGE */}
                {/* {error && <p
                    className="login-error-paragraph"
                    id="login-error-paragraph">
                    {t('error', { error })}
                </p>} */}

                    


            </form>
        </section>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Login', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
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

        const formData = new FormData(event.currentTarget)
        const remember_me = formData.get('remember_me')

        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        }).then(async (res) => {
        
            if (res?.error) 
                return errorMessage(res.error)
    
            return successMessage()
            
        })

        return false

    }

    async function errorMessage(error: string) {
        toast.error(t('error', { error }))
        return false
    }

    async function successMessage() {
        toast.success(t('success_message'))
        router.push(`/${locale}`)
        return true
    }

    return (
        <section>

            <form
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

                            <div className="w-full col-span-2 flex flex-row">
                                <div className="w-1/12">
                                    <input
                                        type="checkbox"
                                        id="remember_me"
                                        name="remember_me"
                                        className={styles.inputForm}
                                        required />
                                </div>
                                
                                <div className="w-3/4 text-left">
                                    <label htmlFor="remember_me">
                                        {t('remember_me_label')}
                                    </label>
                                </div>
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
                {/* { error && toast.error( t('error', { error }) ) } */}

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
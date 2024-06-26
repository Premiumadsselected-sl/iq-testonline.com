'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import { FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useLocale, useTimeZone, useTranslations } from 'next-intl'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


// Styles
import styles from '@/pages/services/iq-testonline/styles/RegisterStyles.module.css'

type Props = AppProps & {
    children: React.ReactNode
}

export default function CustomizeRegisterForm({ pageProps }: Props) {

    const locale = useLocale()
    const t = useTranslations('Register')
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
        const user_name = formData.get('user_name')
        const email = formData.get('email')
        const password = formData.get('password')
        
        try {

            const req_register = 
            await fetch(process.env.NEXT_PUBLIC_SERVICE_ENDPOINT_URL as string, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    method: 'POST',
                    path: 'auth/register',
                    params: { 
                        user_name: user_name,
                        email: email, 
                        password: password,
                        remember_me
                    }
                })
            })

            const res_register = await req_register.json() 
        
            if ( res_register.statusCode !== 200 ) {
                await errorMessage(res_register.message)
                return false
            }

            const req_login = signIn('credentials', {
                email: email, 
                password: password,
                redirect: false
            }).then(async (res)=>{
                
                if (res?.error) {
                    await errorMessage(res.error)
                    return false
                }

                await successMessage()
                router.push( `/${locale}/payment`)
            })

            return req_login
        }

        catch (error: any) {
            await errorMessage(error)
        }

    }

    async function errorMessage(error: string) {
        toast.error(t('error', { error }))
        return false
    }

    async function successMessage() {
        toast.success(t('success_message'))
        return true
    }

    return (

        <section>

            <form
                onSubmit={onSubmit}
                id="register-form"
                className="register-form"
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
                        className="lg:w-[50%] flex-none bg-cover rounded-r-lg text-center" 
                        style={{ backgroundImage: 'url(/assets/login/cosmos.jpg)' }}
                        title="Woman holding a mug">
                    </div>

                </div>

                {/* SHOW ERROR  WITH TOAST */}
                {/* { error && toast.error( t('error', { error }) ) } */}

                {/* SHOW ERROR ON PAGE */}
                {/* {error && <p
                    className="register-error-paragraph"
                    id="register-error-paragraph">
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
            translationNamespace: 'Register', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import { useLocale, useTimeZone, useTranslations } from 'next-intl'

type Props = AppProps & {
    t: any
}

//Styles
import styles from '@/pages/services/iq-testonline/styles/ProfileStyles.module.css'

export default function UpdatePassword({ router, pageProps }: AppProps) {

    const locale = useLocale()
    const t = useTranslations('Profile')
    const Zone = useTimeZone() || process.env.NEXT_PUBLIC_TIMEZONE

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
        locale: locale,
        timeZone: Zone
    }

    return (
        <form
            // action="/api/auth/callback/credentials"
            method="post"
            // onSubmit={onSubmit}
            id="forgot-password-form"
            className="forgot-password-form"
        >
            <div className="w-full lg:max-w-full lg:flex h-auto">
                <div className="bg-white p-4 flex flex-col leading-normal rounded-lg w-full border-customBorderGray border-[1px] shadow-md">
                    <div className="grid grid-cols-1 gap-2" >
                        <span className="col-span-2 text-xl md:text-3xl  text-customGray font-bold leading-none tracking-tight">Restablecer mi contraseña</span>
                        <div className=" col-span-2 text-start">
                            <input type="password" id="old_password" className={styles.inputForm} placeholder={"Contraseña actual"} required />
                        </div>
                        <div className=" col-span-2 text-start">
                            <input type="password" id="new_password" className={styles.inputForm} placeholder={"Nueva contraseña"} required />
                        </div>
                        <div className=" col-span-2 text-start">
                            <input type="password" id="confirm_password" className={styles.inputForm} placeholder={"Confirmar contraseña"} required />
                        </div>
                        <div className="col-span-2">
                            <button className={styles.button}>
                                <span>Confirmar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Index', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
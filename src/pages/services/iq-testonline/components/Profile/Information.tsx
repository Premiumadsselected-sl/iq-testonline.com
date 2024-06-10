'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import { useLocale, useTimeZone, useTranslations } from 'next-intl'

//Styles
import styles from '@/pages/services/iq-testonline/styles/ProfileStyles.module.css'

type Props = AppProps & {
    t: any
}

export default function Information({ router, pageProps }: AppProps) {
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
                    <div className="grid grid-cols-2 gap-4 md:gap-6" >
                        <span className="col-span-2 text-xl md:text-3xl  text-customGray font-bold leading-none tracking-tight">Información personal</span>
                        <div className=" col-span-2 md:col-span-1 text-start">
                            <label className="required font-semibold">Nombre</label>
                            <input type="text" id="name" className={styles.inputForm} placeholder={"Contraseña actual"} required value={"Nombre Apellido"} />
                        </div>
                        <div className="col-span-2 md:col-span-1 text-start">
                            <label className="required font-semibold">Correo electrónico</label>
                            <input type="email" id="email" disabled className={styles.inputForm} placeholder={"Nueva contraseña"} value={"correo@correo.com"} />
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
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Index', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}


'use client'
import { useLocale, useTimeZone, useTranslations } from 'next-intl'
import { AppProps } from "next/app"
import { GetStaticPropsContext } from 'next'

type Props = AppProps & {
    t: any
}

export default function Wellcome({ router, pageProps }: AppProps) {
    
    const locale = useLocale()
    const t = useTranslations('Wellcome') 
    const Zone = useTimeZone() || process.env.NEXT_PUBLIC_TIMEZONE

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
        locale: locale,
        timeZone: Zone
    }

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
            translationNamespace: 'Wellcome', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
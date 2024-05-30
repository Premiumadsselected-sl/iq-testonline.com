import Error from 'next/error'
import { useLocale, useTimeZone, useTranslations } from 'next-intl'
import {AppProps} from 'next/app'

export default function Wellcome({ router, pageProps }: AppProps) {
    
    const locale = useLocale()
    const t = useTranslations('NotFound') 
    const Zone = useTimeZone() || process.env.NEXT_PUBLIC_TIMEZONE

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
        locale: locale,
        timeZone: Zone
    }

    return (<>
        
        <html lang={locale}>
        <body>
            <h1>{t('title')}</h1>
            <p> {t('description')} </p>
            <Error statusCode={404} />
        </body>
        </html>

    </>)

}
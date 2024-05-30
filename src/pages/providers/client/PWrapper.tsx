import {AppProps} from 'next/app'
import {GetStaticPropsContext} from 'next'
import {
  useLocale,
  useTimeZone,
  useTranslations, 
  NamespaceKeys
} from 'next-intl'
import ServiceWrapper from '@/components/server/ServiceWrapper'

type Props = AppProps & {
  children: React.ReactNode
  translations: NamespaceKeys<any, any>
  timeZone: string | null
}

export default function PWrapper({Component, children, router, translations, timeZone, pageProps}: Props) {

    const locale = useLocale()
    const t = useTranslations(translations) 
    const Zone = useTimeZone() || timeZone || process.env.NEXT_PUBLIC_TIMEZONE

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
        locale: locale,
        timeZone: Zone,
        translationNamespace: t
    }
  
    return (
        <ServiceWrapper
            translations={t}
            pageProps={pageProps} 
            Component={PWrapper} 
            router={router} 
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'} 
            locale={locale}
        > { children }
        </ServiceWrapper>
    )

}

export async function getStaticProps({locale, pageProps}: GetStaticPropsContext & Props) { 
  
    return {
      props: {
        messages: (await import(`../../../../messages/${locale}.json`)).default,
        translationNamespace: pageProps.translations,
        locale: locale,
        timeZone: process.env.NEXT_PUBLIC_TIMEZONE
      }
    }

}
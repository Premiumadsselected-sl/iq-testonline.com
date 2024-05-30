import {GetStaticPropsContext} from 'next'
import {NextRouter} from 'next/router'
import {AppProps} from 'next/app'
import {NamespaceKeys} from 'next-intl'
import PageLayout from '@/components/server/PageLayout'
import '@/styles/globals.css'

type Props = AppProps & {
  children: React.ReactNode
  locale: string
  translations: NamespaceKeys<any, any>
  timeZone: string,
  router: NextRouter
}

export default function ServiceWrapper({ Component, router, children, ...pageProps }:Props ) {
  return (
      <PageLayout  
        Component={Component} 
        router={router} 
        pageProps={{  ...pageProps}}>
        {children}
      </PageLayout>
  )
}

export async function getStaticProps({ locale, timeZone, translations }: GetStaticPropsContext & Props) {
    return {
        props: {
            translations: translations,
            locale: locale,
            timeZone: timeZone
        }
    }
}
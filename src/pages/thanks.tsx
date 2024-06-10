'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

import CustomizeThanksComponent from './services/iq-testonline/components/Thanks/CustomizeThanksComponent'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Thanks({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Thanks}
            pageProps={pageProps}
            router={router}
            translations="Thanks"
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            
            <CustomizeThanksComponent 
                Component={Thanks} 
                router={router}
                pageProps={pageProps}
            />
            
        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`../../messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Thanks',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
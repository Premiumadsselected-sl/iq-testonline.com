'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// - Delete this line.
import Wellcome from './services/iq-testonline/components/Wellcome'

type Props = AppProps & {
    children: React.ReactNode
}

export default function About({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={About}
            pageProps={pageProps}
            router={router}
            translations="About" 
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            
            {/* - Delete this component. */}
            <Wellcome
                Component={About} 
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
            translationNamespace: 'About', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
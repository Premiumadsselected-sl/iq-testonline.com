'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// - Delete this line.
import Wellcome from './services/iq-testonline/components/Wellcome'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Index({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Index}
            pageProps={pageProps}
            router={router}
            translations="Index" 
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            {/* - Delete this component. */}
            <Wellcome
                Component={Index} 
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
            translationNamespace: 'Index', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
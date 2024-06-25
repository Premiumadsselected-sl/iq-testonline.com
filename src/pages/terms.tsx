'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

import TermsConditionsComponent from './services/iq-testonline/components/termsAndConditions/TermsConditionsComponent'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Terms({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Terms}
            pageProps={pageProps}
            router={router}
            translations="Terms" 
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            
            <div className='w-full items-start px-2 md:px-28 lg:px-36 xl:px-48 2xl:px-64'>
                <TermsConditionsComponent {...pageProps} />
            </div>

        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`../../messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Terms', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
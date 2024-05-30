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
            
            <div className='w-full items-start px-6 pt-10 md:px-24 md:pt-20'>
                <TermsConditionsComponent {...pageProps} />
            </div>

        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            translationNamespace: 'Terms', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
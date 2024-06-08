'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'
import CustomizePaymentForm from './services/iq-testonline/components/Payment/CustomizePaymentForm'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Payment({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Payment}
            pageProps={pageProps}
            router={router}
            translations="Payment"
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >

            {/* - Require payment form. */}
            <div className='w-full justify-center items-center'>
                <CustomizePaymentForm
                    Component={Payment}
                    router={router}
                    pageProps={pageProps}
                />
            </div>

        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`../../messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Payment',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'
import PaymentForm from '@/components/private/Payments/paymentForm'

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
            <PaymentForm />


        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            translationNamespace: 'Payment', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// - import default login form or create your own
import CustomizeRegisterForm from '@/pages/services/iq-testonline/components/RegisterForm/CustomizeRegisterForm'
import ForgotPasswordForm from '@/pages/services/iq-testonline/components/forgotPassword/ForgotPasswordForm'

type Props = AppProps & {
    children: React.ReactNode
}

export default function ForgotPassword({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={ForgotPassword}
            pageProps={pageProps}
            router={router}
            translations="About"
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >

            {/* Add yor custumize form. */}
            <div className='w-full justify-center items-center px-6 pt-10 md:px-72 md:pt-20'>
                <ForgotPasswordForm {...pageProps} />
            </div>

        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            translationNamespace: 'ForgotPassword',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
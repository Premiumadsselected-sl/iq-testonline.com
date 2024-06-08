'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// - import default login form or create your own
import CustomizeRegisterForm from '@/pages/services/iq-testonline/components/RegisterForm/CustomizeRegisterForm'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Register({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Register}
            pageProps={pageProps}
            router={router}
            translations="About"
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >

            {/* Add yor custumize form. */}
            <div className='w-full justify-center items-center px-6 pt-10 md:px-24 md:pt-20'>
                <CustomizeRegisterForm
                    Component={Register}
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
            translationNamespace: 'Register',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
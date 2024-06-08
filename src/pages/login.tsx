'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// - import default login form or create your own
import CustomizeLoginForm from './services/iq-testonline/components/LoginForm/CustomizeLoginForm'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Login({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Login}
            pageProps={pageProps}
            router={router}
            translations="About"
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >

            {/* Add yor custumize form. */}
            <div className='w-full justify-center items-center px-6 pt-10 md:px-24 md:pt-20'>
                <CustomizeLoginForm
                    Component={Login}
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
            translationNamespace: 'Login',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
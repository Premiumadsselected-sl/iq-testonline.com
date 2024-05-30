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
            <CustomizeLoginForm 
                Component={Login} 
                router={router}
                pageProps={pageProps}
            />

        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            translationNamespace: 'Login', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
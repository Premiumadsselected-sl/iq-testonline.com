'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// Importa los componentes del servicio
import PrivacyPolicyComponent from './services/iq-testonline/components/privacyPolicy/PrivacyPolicyComponent'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Privacy({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Privacy}
            pageProps={pageProps}
            router={router}
            translations="Privacy" 
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
        {/* Los componentes deven ser renderizados aqui */}

        <div className='w-full items-start px-2 md:px-12 lg:px-36 xl:px-48 2xl:px-64'>
            <PrivacyPolicyComponent {...pageProps} />
        </div>

        {/* ------------------------------------------- */}

        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`../../messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Privacy', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
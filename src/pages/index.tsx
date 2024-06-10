'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// Importa los componentes del servicio
import IndexComponent from './services/iq-testonline/components/indexPage/IndexComponent'
import OurTest from './services/iq-testonline/components/indexPage/OurTest';
import FrequentQuestions from './services/iq-testonline/components/indexPage/FrequentQuestions'
import PricingComponent from './services/iq-testonline/components/pricing/PricingComponent'

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
            
            {/* Los componentes deven ser renderizados aqui */}
            <div className='grid grid-cols-1 gap-20 lg:gap-36'>
                <IndexComponent {...pageProps} />
                <OurTest {...pageProps} />
                <PricingComponent {...pageProps} />
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
            translationNamespace: 'Index', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
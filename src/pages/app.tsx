import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// Importa los componentes del servicio
import Timer from './services/iq-testonline/components/iqTest/Timer'
import TestSection from './services/iq-testonline/components/iqTest/TestSection'


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
            <div className='w-full justify-center items-center px-4 pt-4 md:px-36 md:pt-4'>
                <Timer />
                <TestSection {...pageProps}/>
            </div>
            {/* ------------------------------------------- */}

        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            translationNamespace: 'Index', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
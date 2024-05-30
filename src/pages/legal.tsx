import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// Importa los componentes del servicio
import LegalNoticeComponent from './services/iq-testonline/components/legalNotice/LegalNoticeComponent'


type Props = AppProps & {
    children: React.ReactNode
}

export default function Legal({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Legal}
            pageProps={pageProps}
            router={router}
            translations="Legal" 
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            
            {/* Los componentes deven ser renderizados aqui */}
            <div className='w-full items-start px-6 pt-10 md:px-24 md:pt-20'>
                <LegalNoticeComponent {...pageProps} />
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
'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'
import { useEffect, useState } from 'react'

// Import the component
import Fade from './services/iq-testonline/components/transitions/Fade'
import TestSection from './services/iq-testonline/components/askedTest/TestSection'
import Timer from './services/iq-testonline/components/timer/Timer'

type Props = AppProps & {
    children: React.ReactNode
}

export default function AskedTest({ Component, router, pageProps }: Props) {

    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        setShowComponent(true);
    }, []);

    return (

        <PWrapper
            Component={AskedTest}
            pageProps={pageProps}
            router={router}
            translations="Index"
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >

            {/* Los componentes deven ser renderizados aqui */}
            <div className='w-full justify-center items-center px-4 md:px-36 xl:px-56 2xl:px-48'>
                <Fade in={showComponent} >
                    <Timer />
                    <TestSection {...pageProps} />
                </Fade>
            </div>
            {/* ------------------------------------------- */}

        </PWrapper >
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



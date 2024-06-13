'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// - Delete this line.
import PreviewCustomizeComponent from './services/iq-testonline/components/preview/PreviewCustomizeComponent'
import Fade from './services/iq-testonline/components/transitions/Fade'
import { useEffect, useState } from 'react'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Preview({ Component, router, pageProps }: Props) {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        setShowComponent(true);
    }, []);

    return (
        <PWrapper
            Component={Preview}
            pageProps={pageProps}
            router={router}
            translations="Preview"
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            <div className='w-full justify-center items-center px-4 md:px-36'>
                <Fade in={showComponent}>
                    <PreviewCustomizeComponent
                        Component={Preview}
                        router={router}
                        pageProps={pageProps}
                    />
                </Fade>
            </div>



        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`../../messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Preview',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
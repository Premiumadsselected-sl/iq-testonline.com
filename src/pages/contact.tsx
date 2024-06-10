'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

import ContactUsForm from './services/iq-testonline/components/contactUs/ContactUsForm'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Contact({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Contact}
            pageProps={pageProps}
            router={router}
            translations="Contact" 
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            <div className='w-full justify-center items-center px-6 pt-10 md:px-24 md:pt-20'>
                <ContactUsForm {...pageProps} />
            </div>

        </PWrapper>
    )

}


export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`../../messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Contact', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
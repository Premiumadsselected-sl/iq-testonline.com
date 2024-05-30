import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

import CustomizeProfileComponent from '@/pages/services/iq-testonline/components/Profile/CustomizeProfileComponent'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Profile({ Component, router, pageProps }: Props) {

    return (
        <PWrapper
            Component={Profile}
            pageProps={pageProps}
            router={router}
            translations="Profile" 
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            
            <CustomizeProfileComponent
                Component={Profile} 
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
            translationNamespace: 'Profile', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
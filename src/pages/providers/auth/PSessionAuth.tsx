import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { GetStaticPropsContext } from 'next'

type Props = { 
    children: ReactNode
}

const PSessionAuth = ({ children } : Props) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default PSessionAuth

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Index', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
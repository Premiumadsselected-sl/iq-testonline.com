'use client'
import { AppProps } from 'next/app'
import CustomizeFooter from '@/pages/services/iq-testonline/components/Footer/CustomizeFooter'

type Props = AppProps & {
    children: React.ReactNode
}

const Footer = ({ Component, router, pageProps }: Props) => {

    const dateYear = new Date().getFullYear()

    return (
        <>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <footer className="flex p-4 mt-8 flex-col w-full text-center justify-center items-center" id="footer">
                <CustomizeFooter
                    Component={Footer}
                    router={router}
                    pageProps={pageProps}
                />
            </footer>
        </>
    )
}

export default Footer
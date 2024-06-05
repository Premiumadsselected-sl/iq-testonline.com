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
            <footer id="footer">
                <section id="service-footer" className="mt-8 text-center justify-center items-center">

                    <CustomizeFooter
                        Component={Footer}
                        router={router}
                        pageProps={pageProps}

                    />

                </section>

                <section className="flex flex-col m-4 mt-8 text-center text-customGray" id="copy-footer">
                    &copy; ADSSELECTED S.L. All rights reserved. {dateYear}
                </section>

            </footer>
        </>
    )
}

export default Footer
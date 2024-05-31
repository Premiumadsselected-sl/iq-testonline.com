'use client'
import { AppProps } from 'next/app'
import CustomizeFooter from '@/pages/services/iq-testonline/components/Footer/CustomizeFooter

type Props = AppProps & {
    children: React.ReactNode
}

const Footer = ({ Component, router, pageProps }: Props) => {
    
    const dateYear = new Date().getFullYear()

    return (
        <footer className="flex p-4 mt-8 flex-col w-full text-center" id="footer">
            
            <section id="service-footer">
                
                <CustomizeFooter
                    Component={Footer} 
                    router={router}
                    pageProps={pageProps}
                
                />

            </section>
            
            <section className="flex flex-col m-4 mt-8 text-center" id="copy-footer">
                &copy; ADSSELECTED S.L. All rights reserved. {dateYear}
            </section>

        </footer>
    )
}

export default Footer
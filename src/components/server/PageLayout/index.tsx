import {AppProps} from 'next/app'

type Props = AppProps & {
  children: React.ReactNode
}

export default function PageLayout({children, pageProps}: Props) {
  
  return (<>
    <section className="page-layout" id='page-layout'>
      {children}
    </section>
  </>)

}
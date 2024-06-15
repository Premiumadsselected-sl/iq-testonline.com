import {PGlobal} from '@/contexts/global/CGlobal'
import {AppProps} from 'next/app'
import {useRouter} from 'next/router'
import {Provider} from 'react-redux'
import {NextIntlClientProvider} from 'next-intl'
import strore from '../contexts/redux/store'
import Header from '@/components/client/Header'
import Footer from '@/components/client/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  keywords: process.env.NEXT_PUBLIC_APP_KEYWORDS,
  author: process.env.NEXT_PUBLIC_APP_AUTHOR
} 

export default function App({Component, router, pageProps}: AppProps) {
  
  //const router = useRouter()

  return (

    <PGlobal>
        
        <NextIntlClientProvider
          locale={router.locale}
          messages={pageProps.messages}
          timeZone={process.env.NEXT_PUBLIC_TIMEZONE}
        > 
      
          <Provider store={strore}>
              
              <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />

              <Header />

              <main className="flex flex-col mx-4 text-center justify-center h-full" >
                <Component {...pageProps} />
              </main>

              <Footer 
                pageProps={pageProps}  
                Component={Component}
                router={router}
                children={null}
              />
            
          </Provider>
  
      </NextIntlClientProvider>

    </PGlobal>

  )
  
}
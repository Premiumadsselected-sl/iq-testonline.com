'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'
import Link from 'next/link'

// Import the context hooks
import {useSelector, useDispatch} from 'react-redux'
import {changeEmail} from '@/contexts/redux/serviceSlice'

// Import the component
import TestComponent from './services/iq-testonline/components/TestComponent'

type Props = AppProps & {
    children: React.ReactNode
}

export default function Test({ Component, router, pageProps }: Props) {

    // Get the context
    const dispatch = useDispatch()
    const service = useSelector((state: any) => state.service)
    
    // Handle the event
    const handle = () => {
        dispatch(changeEmail('test@test.com'))
    }

    return (
        
        <PWrapper
            Component={Test}
            pageProps={pageProps}
            router={router}
            translations="Test" 
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            
            <div className="flex w-full mx-4 py-4">
            
                <div 
                    className='bg-gray-200 p-4 rounded-lg m-4 w-1/2 mx-auto'
                > 
                
                    <h3 className='text-center text-gray-900'
                    > COMPONENTE DE PAGINA </h3>

                    <p className='text-center text-gray-900'>
                        context : 
                        <span className="text-blue-500 font-bold mx-4">
                            {/* use the context */}
                            {service.email}
                        </span> <br />
                    </p>

                    {/* change the context */}
                    <button className='bg-blue-500 text-white p-2 rounded'
                    onClick={handle}> clickme! </button>

                </div>

                <div className='flex flex-col'>
                    <TestComponent/>
                </div>

            </div>

        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`../../messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Test', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}



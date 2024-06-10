'use client'

import { changeEmail} from '@/contexts/redux/serviceSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppProps } from "next/app"
import { GetStaticPropsContext } from 'next'

type Props = AppProps & {
    t: any
}

export default function TestComponent() {

    const dispatch = useDispatch()
    const service = useSelector((state: any) => state.service)
    
    const handle = () => {
        dispatch(changeEmail('test-component-1@test.com'))
    }

    return (
        <div className='bg-gray-200 p-4 rounded-lg m-4 w-50 mx-auto'
        > 
            
            <h4 className='text-center text-gray-900'
            > COMPONENTE #1 </h4>

            <p className='text-center text-gray-900'>
                context : 
                <span className="text-blue-500 font-bold mx-4">
                    {service.email}
                </span> <br />
            </p>

            <button className='bg-blue-500 text-white p-2 rounded'
            onClick={handle}> clickme! </button>

        </div>
    )

}

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
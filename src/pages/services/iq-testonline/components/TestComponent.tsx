'use client'

import { changeEmail} from "@/pages/context/serviceSlice"
import { useDispatch, useSelector } from "react-redux"


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
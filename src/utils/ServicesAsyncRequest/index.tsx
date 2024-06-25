
'use client'
import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'

const ServicesAsyncRequest = async ( { method, path, body, session } : ServicesAsyncRequestInterface ) => {

    if( method === 'GET' ){
        return { error: 'Method not allowed' }
    }

    try {
        console.log(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}${path}`)
        const req = await fetch( `${process.env.NEXT_PUBLIC_ENDPOINT_URL}${path}`, {
            headers: {
               'Content-Type': 'application/json',
                    ...(session?.user.token && {
                    authorization: `Bearer ${session?.user.token}`
                })
            },
            method: method,
            body: body
        })
    
        const res = await req.json()  
        return res  
    }

    catch ( error ) {
        return error
    } 

}

export default ServicesAsyncRequest
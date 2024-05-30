import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'

const ServicesAsyncRequest = async ( { method, path, body } : ServicesAsyncRequestInterface ) => {

    if( method !== 'GET' && method !== 'POST' )
        throw new Error('Method not allowed')

    const req = await fetch( `${process.env.NEXT_PUBLIC_ENDPOINT_URL}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.ENDPOINT_API_KEY}`
        },
        body: body
    })

    const res = await req.json()  
    return res  

}

export default ServicesAsyncRequest
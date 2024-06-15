
import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'


const ServicesAsyncRequest = async ( { token, method, path, body } : ServicesAsyncRequestInterface ) => {

    if( method === 'GET' )
        return { error: 'Method not allowed' }

    console.log( token )

    const req = await fetch( `${process.env.NEXT_PUBLIC_ENDPOINT_URL}${path}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token || process.env.NEXT_PUBLIC_API_TOKEN }`
        },
        method: method,
        body: body
    })

    const res = await req.json()  
    return res  

}

export default ServicesAsyncRequest
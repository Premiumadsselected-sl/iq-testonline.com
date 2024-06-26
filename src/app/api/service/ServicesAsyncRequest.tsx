import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextApiRequest } from 'next'

const ServicesAsyncRequest = async ( req:NextApiRequest ) => {

    const body: ServicesAsyncRequestInterface = req.body 
    const params = body.params as string
    const path = body.path as string
    const method = body.method as string
    const token = body.token as string

    console.log('ServicesAsyncRequest', body)

    try {

        const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
        const request = await fetch( url, {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            method: method,
            body: params as string
        })
    
        const res = await request.json()  
        return res 

    }

    catch ( error ) {
        return error
    } 

}

export default ServicesAsyncRequest
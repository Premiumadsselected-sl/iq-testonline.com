import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextApiRequest, NextApiResponse } from 'next'

const ServicesAsyncRequest = async ( req:NextApiRequest, res:NextApiResponse ) => {

    const body: ServicesAsyncRequestInterface = req.body 
    const params = body.params as string
    const path = body.path as string
    const method = body.method as string
    const token = body.token as string

    if( req.method === 'GET' ){
        return res.status(200).end()
    }

    if( req.method === 'POST' ){
        try {

            const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
            const request = await fetch( url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
                },
                body: params as string
            })
        
            const res = await request.json()  
            return res 
    
        }

        catch ( error ) {
            return error
        } 
    }

    

    

}

export default ServicesAsyncRequest
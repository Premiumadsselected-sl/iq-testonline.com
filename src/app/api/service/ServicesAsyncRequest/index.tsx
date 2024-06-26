import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function 
POST( req:NextApiRequest, res:NextApiResponse ) {

    const body: ServicesAsyncRequestInterface = req.body 
    const params = body.params as string
    const path = body.path as string
    const method = body.method as string
    const token = body.token as string

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
    
        const response = await request.json()  

        return res.send(response)

    }

    catch ( error ) {
        return res.send(error)
    } 

}
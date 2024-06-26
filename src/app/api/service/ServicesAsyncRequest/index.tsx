import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextRequest } from 'next/server'

// export default async function 
// POST( req:NextApiRequest, res:NextApiResponse ) {

//     const body: ServicesAsyncRequestInterface = req.body 
//     const params = body.params as string
//     const path = body.path as string
//     const method = body.method as string
//     const token = body.token as string

//     try {

//         const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
//         const request = await fetch( url, {
//             method: method,
//             headers: {
//                 'Content-Type': 'application/json',
//                 authorization: `Bearer ${token}`
//             },
//             body: params as string
//         })
    
//         const response = await request.json()  

//         return res.send(response)

//     }

//     catch ( error ) {
//         return res.send(error)
//     } 

// }

export default async function handler( req:NextRequest ) {
    if( req.method === 'POST' )
        return { status: 200, body: 'POST', request: req }
    // const body = req.body 
    // const body_backend = JSON.parse(body as unknown as string) 
    // const path = body_backend.path as string
    // const method = body_backend.method as string
    // const token = body_backend?.token as string

    // try {

    //     const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
    //     const request = await fetch( url, {
    //         method: method,
    //         headers: {
    //             'Content-Type': 'application/json',
    //             authorization: `Bearer ${token? token : ''}`
    //         },
    //         body: body_backend as string
    //     })
    
    //     const response = await request.json()  

    //     return response

    // }

    // catch ( error ) {
    //     return error
    // } 

}
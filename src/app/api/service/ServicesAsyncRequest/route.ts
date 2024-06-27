// import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextRequest, NextResponse } from 'next/server'

export async function POST( req:NextRequest, res: NextResponse ) {
    
    const { method, path, params, token } = await req.json();
    
    console.log('method:', method);
    console.log('path:', path);
    console.log('params:', params);
    console.log('token:', token);
    
    return NextResponse.json({ message: 'POST', request: { 
        method, path, params
    } });

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
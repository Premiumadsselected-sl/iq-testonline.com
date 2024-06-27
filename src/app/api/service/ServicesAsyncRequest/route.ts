// import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextRequest, NextResponse } from 'next/server'

export async function POST( req:NextRequest, res: NextResponse ) {
    
    const { method, path, params, token } = await req.json()

    const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
    const request = await fetch( url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token? token as string : ''}`
        },
        body: JSON.stringify(params)
    })

    const response = await request.json()

    return NextResponse.json({ response })

    // const response = await request.json()

    // return NextResponse.json(response)

    // try {

    //     const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
    //     const request = await fetch( url, {
    //         method: params.method,
    //         headers: {
    //             'Content-Type': 'application/json',
    //             authorization: `Bearer ${token? token : ''}`
    //         },
    //         body: params as string
    //     })
    
    //     const response = await request.json()

    //     return NextResponse.json(response)

    // }

    // catch ( error ) {
    //     console.log('error', error)
    //     return NextResponse.json({ error })
    // } 

}
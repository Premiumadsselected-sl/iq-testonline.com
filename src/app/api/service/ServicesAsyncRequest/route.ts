// import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextRequest, NextResponse } from 'next/server'

export async function POST( req:NextRequest, res: NextResponse ) {
    
    const { path, params, token } = await req.json()

    const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
    //return NextResponse.json({ url, params, token })
    const request = await fetch( url, {
        method: params.method,
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token? token : ''}`
        },
        body: params as string
    })

    return NextResponse.json({ request })

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
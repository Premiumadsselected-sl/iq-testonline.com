// import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextRequest, NextResponse } from 'next/server'

export async function POST( req:NextRequest, res: NextResponse ) {

    try {

        const { method, path, params, token } = await req.json()
        const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
        
        // console.log('Backend Request:', {
        //     url: url,
        //     method: method,
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'authorization': `Bearer ${token}`
        //     },
        //     body: JSON.stringify(params)
        // });

        const request = await fetch( url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(params)
        })

        if (!request.ok) {
            const errorResponse = await request.json()
            return NextResponse.json(errorResponse, { status: request.status })
        }

        const response = await request.json()
        return NextResponse.json(response)

    }

    catch ( error ) {
        return NextResponse.json(error)
    } 

}
// import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextRequest, NextResponse } from 'next/server'

export async function POST( req:NextRequest, res: NextResponse ) {

    try {

        const { method, path, params  } = await req.json()
        const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
        
        const request = await fetch( url, {
            method: method,
            body: params
        })

        const response = await request.json()

        return NextResponse.json({paramas: params, response})

    }

    catch ( error ) {
        return NextResponse.json(error)
    } 

}
// import {ServicesAsyncRequestInterface} from '@/interfaces/IServicesAsyncRequest'
import { NextRequest, NextResponse } from 'next/server'

export async function POST( req:NextRequest, res: NextResponse ) {

    try {

        const { method, path, params, headers } = await req.json()
        const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
        
        const request = await fetch( url, {
            method: method,
            headers: headers,
            body: JSON.stringify(params)
        })

        const response = await request.json()

        return NextResponse.json(response)

    }

    catch ( error ) {
        return NextResponse.json(error)
    } 

}
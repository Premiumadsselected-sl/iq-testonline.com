import { NextRequest, NextResponse } from 'next/server'

export async function POST( req:NextRequest, res: NextResponse ) {

    try {

        const { method, path, params } = await req.json()
        const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
        const token = req.headers.get('Authorization')

        // const request = await fetch( url, {
        //     method: method,
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `${token}`
        //     },
        //     body: JSON.stringify(params)
        // })

        // if (!request.ok) {
        //     const errorResponse = await request.json()
        //     return NextResponse.json(errorResponse, { status: request.status })
        // }

        // const response = await request.json()
        return NextResponse.json(method)

    }

    catch ( error ) {
        return NextResponse.json(error)
    } 

}
import { NextRequest, NextResponse } from 'next/server'

export async function POST( req:NextRequest, res: NextResponse ) {

    try {

        const { method, path, params } = await req.json()
        const url = `${process.env.NEXT_BACKEND_ENDPOINT_URL}${path}` as string
        const token = req.headers.get('Authorization')

        const request = await fetch( url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(params)
        })

        if (!request.ok) {
            const errorResponse = await request.json()
            return NextResponse.json(errorResponse, { status: request.status })
        }

        console.log(request)
        const response = await request.json()
        return NextResponse.json({request})

    }

    catch ( error ) {
        return NextResponse.json(error)
    } 

}

// {
//     "method": "POST",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXh0ZXN0MUBtYWlsLmNvbSIsInJvbGUiOiJzdWJzY3JpYmVyIiwiaWF0IjoxNzE5NTg2ODcwLCJleHAiOjE3MTk2NzMyNzB9.1dUzhssvtpB5j5YePUR8PqJ5EJ7JTVXteubtuAcUsWU",
//     "params": {
//         "email": "alextest1@mail.com"
//     },
//     "path": "users/get-user"
// }
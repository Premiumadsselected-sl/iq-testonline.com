import {NextApiRequest, NextApiResponse} from 'next'
import { useSession } from 'next-auth/react'
import { useLocale } from 'next-intl'
import { cookies } from 'next/headers'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if( req.method === 'GET' )
        return res.status(200).end()

    if ( req.method !== 'POST' ) 
        return res.status(405).end()
    
    const cookie = cookies()
    const paymentId = cookie.get('paymentId') || undefined
    const { data: session, status } = useSession()
    const locale = useLocale()

    if ( !session ) return ({
        id: status as string,
        results: {
            ok: false,
            error: `user-status-${status}`,
            url: `${locale}/register`
        }
    })

    try{
        
        // const query = await ServicesAsyncRequest({
        //     method: 'POST', 
        //     path: `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/get-subscription`, 
        //     body: JSON.stringify({ 
        //         user: session.user,
        //         paymentId: paymentId
        //     })
        // })

        const request = await fetch( `${process.env.NEXT_PUBLIC_SERVICE_ENDPOINT_URL}`, {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${session.user.token}`
            },
            method: 'POST',
            body: JSON.stringify({ 
                user: session.user,
                paymentId: paymentId
            })
        })

        const response = await request.json()

        if( !response.ok ) return ({
            id: response.error as string,
            url: `${locale}/payment`,
            results: {
                ok: false,
                error: response.error as string
            }
        })

        return ({
            id: 'susbscription-ok',
            url: `${locale}/results`,
            results: {
                ok: true,
                error: null,
                user_session: session.user, 
                data: response
            }
        })

    }

    catch ( error ) {
        return ({
            id: error as string,
            url: `${locale}/unknown-error`,
            results: {
                ok: false,
                error: error
            }
        })
    }

}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb'
        }
    }
}
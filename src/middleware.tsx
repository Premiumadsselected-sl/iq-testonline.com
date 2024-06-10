import { useLocale } from 'next-intl'
import { NextResponse, NextRequest } from 'next/server'

export { default } from "next-auth/middleware"

export async function middleware(request: NextRequest) {
    
    const cookies = request.cookies
    const locale = cookies.get('NEXT_LOCALE') || useLocale()
    const paymentId = cookies.get('paymentId')

    let redirectTo:string = locale ? `/${locale}/` : '/' 

    if( !paymentId?.value )
        return NextResponse.redirect(redirectTo)

    return NextResponse.next()
    
}

export const config = {
    matcher: '/:locale/thanks/:path*'
}
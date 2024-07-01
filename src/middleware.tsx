export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        '/payment/:path*',
        '/profile/:path*',
        '/contact/:path*',
        '/training/:path*'
    ]
}
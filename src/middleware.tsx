
export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        '/api/service/:path*',
        '/api/service/*',
        '/payment/:path*',
        '/thanks/:path*',
        '/profile/:path*',
        '/contact/:path*',
        '/training/:path*'
    ]
}
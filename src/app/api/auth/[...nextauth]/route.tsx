import NextAuth from 'next-auth'
import Authentication from '@/auth'

const handler = NextAuth(Authentication)

export {handler as GET, handler as POST}
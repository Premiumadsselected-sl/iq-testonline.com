import {AuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const Authentication: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: 'jwt' },
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
          email: {type: 'email'},
          password: {type: 'password'}
        },
        async authorize(credentials) {

            const req = await fetch(process.env.NEXT_PUBLIC_SERVICE_ENDPOINT_URL as string, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    method: 'POST',
                    path: 'auth/login',
                    params: { 
                      email: credentials?.email, 
                      password: credentials?.password
                    }
                })
            })
    
            const res = await req.json() 

            if ( res.statusCode !== 200 ) 
                throw res

            return res
    
       }

      })
    ],
    callbacks: {
      async jwt({token, user}) {
        return {...token, ...user}
      },
      async session({ session, token }) {
        session.user = token as any
        return session
      }
    },
    pages: {
      signIn: '/register',
      signOut: '/'
    }
}

export default Authentication

import {AuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import ServicesAsyncRequest from '@/utils/ServicesAsyncRequest'

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
            
            const auth_user = await ServicesAsyncRequest({
              method: 'POST', 
              path:'auth-login',
              body: JSON.stringify({ 
                email: credentials?.email, 
                password: credentials?.password
              })
            })
            
            if ( !auth_user.ok ) throw auth_user
            return auth_user
    
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

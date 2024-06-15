import {AuthOptions, User} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {SignInCredentials, SignUpCredentials} from '@/interfaces/IAuthCredentials'
import ServicesAsyncRequest from '@/utils/ServicesAsyncRequest'
import {app, auth, analytics} from '@/configs/firebase/config'

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
            
            // Authentication with Firebase
            // if( process.env.NEXT_FIREBASE_AUTH !== 'false' ) {

            //     return await signInWithEmailAndPassword(auth, user_email, password)
            //     .then( async userCredentials => {

            //         const { user } = userCredentials
            //         const token = user.getIdToken()
            //         const logInBackend = await ServicesAsyncRequest({
            //           method: 'POST', 
            //           path:'auth-login', 
            //           body: JSON.stringify({ 
            //             token: token,
            //             user_email: user.email,
            //             password: password
            //           })
            //         })
                  
            //         if( !logInBackend.ok ) throw new Error( logInBackend.error )
            //         return { id: user.uid, user: user }

            //     }).catch( error => {
                  
            //         if( error.code === 'auth/invalid-login-credentials' || error.code === 'auth/wrong-password' ) 
            //         return { 
            //           user: null,
            //           error: 'user-not-found', 
            //           id: ''
            //         }

            //         else if( error.code === 'auth/invalid-email' )
            //         return { 
            //           user: null,
            //           error: 'invalid-email', 
            //           id: ''
            //         }

            //         else if( error.code === 'auth/too-many-requests' )
            //         return { 
            //           user: null,
            //           error: 'too-many-requests', 
            //           id: ''
            //         }

            //         return  null
                
            //     })

            // }

            // Authentication with Database
            // else {

            //     const auth_login = await ServicesAsyncRequest({
            //       method: 'POST', 
            //       path:'auth-login', 
            //       body: JSON.stringify({ 
            //         email: credentials?.email,
            //         password: credentials?.password
            //       })
            //     })
                
            //     console.log(auth_login) 
 
            //     // Add logic here to look up the user from the credentials supplied
            //     const user = { id: "1", email: "jsmith@example.com"}
                
            //     if (user) {
            
            //         // Any object returned will be saved in `user` property of the JWT
            //         return user
            
            //     } else {
                  
            //       // If you return null then an error will be displayed advising the user to check their details.
            //       return null
          
            //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      
            //     }
              
            //     // if( !res.ok ) 
            //     //     return res.error
                
            //     // return { id: user.id, user: user }

            // }
            
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

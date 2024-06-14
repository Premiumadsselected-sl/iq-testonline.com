import {AuthOptions, User} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {SignInCredentials, SignUpCredentials} from '@/interfaces/IAuthCredentials'
import ServicesAsyncRequest from '@/utils/ServicesAsyncRequest'
// import {app, auth, analytics} from '@/configs/firebase/config'

const Authentication: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt'
    },
    providers: [
      // CredentialsProvider({
      //   name: 'Login',
      //   credentials: {
      //     user_email: {type: 'email'},
      //     password: {type: 'password'}
      //   },
      //   async authorize(credentials) {
            
      //       const { user_email, password } = credentials as SignInCredentials
      //       return await signInWithEmailAndPassword(auth, user_email, password)
      //       .then( async userCredentials => {

      //           const { user } = userCredentials
      //           const token = user.getIdToken()
      //           const logInBackend = await ServicesAsyncRequest({
      //             method: 'POST', 
      //             path:'/auth/login', 
      //             body: JSON.stringify({ 
      //               token: token,
      //               user: user
      //             })
      //           })
               
      //           if( !logInBackend.ok ) throw new Error( logInBackend.error )
      //           return { id: user.uid, user: user }

      //       }).catch( error => {
              
      //           if( error.code === 'auth/invalid-login-credentials' || error.code === 'auth/wrong-password' ) 
      //           return { 
      //             user: null,
      //             error: 'user-not-found', 
      //             id: ''
      //           }

      //           else if( error.code === 'auth/invalid-email' )
      //           return { 
      //             user: null,
      //             error: 'invalid-email', 
      //             id: ''
      //           }

      //           else if( error.code === 'auth/too-many-requests' )
      //           return { 
      //             user: null,
      //             error: 'too-many-requests', 
      //             id: ''
      //           }

      //           return  null
            
      //       })

      //   }
      // }),
      // CredentialsProvider({
      //   name: 'Register',
      //   credentials: {
      //     user_name: {type: 'text'},
      //     user_email: {type: 'email'},
      //     password: {type: 'password'}
      //   },
      //   async authorize(credentials) {
            
      //     const { user_name, user_email, password } = credentials as SignUpCredentials
      //     return await createUserWithEmailAndPassword(auth, user_email, password)
      //     .then( async userCredentials => {

      //         const { user } = userCredentials
      //         const token = user.getIdToken()
      //         const SignInBackend = await ServicesAsyncRequest({
      //           method: 'POST', 
      //           path:'/auth/register', 
      //           body: JSON.stringify({ 
      //             token: token,
      //             user_name: user_name || '',
      //             user: user
      //           })
      //         })

      //         if( !SignInBackend.ok ) throw new SignInBackend
      //         return { id: user.uid, user: user }

      //     }).catch( error => {
            
      //         if( error.code === 'auth/email-already-in-use' )
      //         return { 
      //           user: null,
      //           error: 'email-already-in-use', 
      //           id: ''
      //         }

      //         else if( error.code === 'auth/invalid-email' )
      //         return { 
      //           user: null,
      //           error: 'invalid-email', 
      //           id: ''
      //         }

      //         else if( error.code === 'auth/weak-password' )
      //         return { 
      //           user: null,
      //           error: 'weak-password', 
      //           id: ''
      //         }

      //         else if( error.code === 'auth/invalid-password' )
      //         return { 
      //           user: null,
      //           error: 'invalid-password', 
      //           id: ''
      //         }

      //         return  null
          
      //     })

          

      //   }
      // })
      
      CredentialsProvider({
        
        // The name to display on the sign in form (e.g. "Sign in with...")
        id: "credentials",
        name: "Credentials",
        
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.

        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          
          // Add logic here to look up the user from the credentials supplied
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
          if (user) {
            
            // Any object returned will be saved in `user` property of the JWT
            return user

          } else {
            
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter

          }
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
    }
}

export default Authentication

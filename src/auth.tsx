import {AuthOptions, User} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {SignInCredentials, SignUpCredentials} from '@/interfaces/IAuthCredentials'
import ServicesAsyncRequest from '@/utils/ServicesAsyncRequest'
import {app, auth, analytics} from '@/configs/firebase/config'

const Authentication: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        name: 'Login',
        credentials: {
          user_email: {type: 'email'},
          password: {type: 'password'}
        },
        async authorize(credentials) {
            
            const { user_email, password } = credentials as SignInCredentials
            return await signInWithEmailAndPassword(auth, user_email, password)
            .then( async userCredentials => {

                const { user } = userCredentials
                const token = user.getIdToken()
                const logInBackend = await ServicesAsyncRequest({
                  method: 'POST', 
                  path:'/auth/login', 
                  body: JSON.stringify({ 
                    token: token,
                    user: user
                  })
                })
               
                if( !logInBackend.ok ) throw new Error( logInBackend.error )
                return { id: user.uid, user: user }

            }).catch( error => {
              
                if( error.code === 'auth/invalid-login-credentials' || error.code === 'auth/wrong-password' ) 
                return { 
                  user: null,
                  error: 'user-not-found', 
                  id: ''
                }

                else if( error.code === 'auth/invalid-email' )
                return { 
                  user: null,
                  error: 'invalid-email', 
                  id: ''
                }

                else if( error.code === 'auth/too-many-requests' )
                return { 
                  user: null,
                  error: 'too-many-requests', 
                  id: ''
                }

                return  null
            
            })

        }
      }),
      CredentialsProvider({
        name: 'Register',
        credentials: {
          user_name: {type: 'text'},
          user_email: {type: 'email'},
          password: {type: 'password'}
        },
        async authorize(credentials) {
            
          const { user_name, user_email, password } = credentials as SignUpCredentials
          return await createUserWithEmailAndPassword(auth, user_email, password)
          .then( async userCredentials => {

              const { user } = userCredentials
              const token = user.getIdToken()
              const SignInBackend = await ServicesAsyncRequest({
                method: 'POST', path:'/auth/register', 
                body: JSON.stringify({ 
                  token: token,
                  user_name: user_name || '',
                  user: user
                })
              })

              if( !SignInBackend.ok ) throw new SignInBackend
              return { id: user.uid, user: user }

          }).catch( error => {
            
              if( error.code === 'auth/email-already-in-use' )
              return { 
                user: null,
                error: 'email-already-in-use', 
                id: ''
              }

              else if( error.code === 'auth/invalid-email' )
              return { 
                user: null,
                error: 'invalid-email', 
                id: ''
              }

              else if( error.code === 'auth/weak-password' )
              return { 
                user: null,
                error: 'weak-password', 
                id: ''
              }

              else if( error.code === 'auth/invalid-password' )
              return { 
                user: null,
                error: 'invalid-password', 
                id: ''
              }

              return  null
          
          })

          

        }
      })
      
    ]
}

export default Authentication


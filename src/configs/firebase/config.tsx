// import { initializeApp, getApps, getApp } from "firebase/app"
// import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

//const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
//const auth = getAuth(app)

//let analytics:string | null = null
// Todo: Fix this error: "Cannot use import statement outside a module" and 
// add the following code to the if statement:
// if (typeof window !== 'undefined') {
//     const { getAnalytics, isSupported } = require("firebase/analytics")
//     if (isSupported()) {
//         analytics = getAnalytics(app)
//     }
// }

//export { app, auth, analytics }
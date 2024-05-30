'use client'
import {useEffect, useState, useContext} from 'react'
import {createContext} from 'react'
import {auth, analytics} from '@/configs/firebase/config'
import PSessionAuth from '@/pages/providers/auth/PSessionAuth'
import {ReactNode} from 'react'

type Props = { 
    children: ReactNode
}

const CGlobal = createContext({})

export const PGlobal = ( { children } : Props ) => {
    
    useEffect(() => {
        
        // ✨ Firebase auth - state session management
        auth.onAuthStateChanged(currentUser => currentUser)
        
        
    }, [])

    return (    
        <CGlobal.Provider value={{}}>
            <PSessionAuth> 
                {children} 
            </PSessionAuth>
        </CGlobal.Provider>  
    )

}

export default CGlobal
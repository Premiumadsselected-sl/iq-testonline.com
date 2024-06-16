'use client'
import {createContext} from 'react'
import PSessionAuth from '@/pages/providers/auth/PSessionAuth'
import {ReactNode} from 'react'

type Props = { 
    children: ReactNode
}

const CGlobal = createContext({})

export const PGlobal = ( { children } : Props ) => {

    return (    
        <CGlobal.Provider value={{}}>
            <PSessionAuth> 
                {children} 
            </PSessionAuth>
        </CGlobal.Provider>  
    )

}

export default CGlobal
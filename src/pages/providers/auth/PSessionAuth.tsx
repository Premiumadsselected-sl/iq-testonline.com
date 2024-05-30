import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

type Props = { 
    children: ReactNode
}

const PSessionAuth = ({ children } : Props) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default PSessionAuth
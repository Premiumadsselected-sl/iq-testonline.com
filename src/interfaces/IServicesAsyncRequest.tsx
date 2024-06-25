
import { SessionContextValue } from "next-auth/react"

export interface ServicesAsyncRequestInterface {
    token?: string,
    method: string, 
    path: string,
    body: string,
    // session: SessionContextValue<R>
    session: any
}
import ServicesAsyncRequest from '@/utils/ServicesAsyncRequest'

export async function signUp( body: string ) {
    
    const new_register = await ServicesAsyncRequest({
        method: 'POST', 
        path: 'new-register',
        body: body
    })
      
    if ( !new_register.ok ) throw new_register
    return new_register

}



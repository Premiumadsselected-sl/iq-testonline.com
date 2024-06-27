'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import { useLocale, useTimeZone, useTranslations } from 'next-intl'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { SlReload } from 'react-icons/sl'
import { MdLocalOffer } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Ejemplo: Como se usan las peticiones al backend.
// Importa el hook useSession de next-auth/react y el 
// metodo ServicesAsyncRequest de '@/utils/ServicesAsyncRequest'

// Imports
import { useSession } from "next-auth/react"

//Styles
import styles from '@/pages/services/iq-testonline/styles/ProfileStyles.module.css'

type Props = AppProps & {
    children: React.ReactNode
}

//Components
import Information from './Information'
import MyOffer from './MyOffer'
import UpdatePassword from './UpdatePassword'

export default function CustomizeThanksComponent({ router, pageProps }: AppProps) {

    const locale = useLocale()
    const t = useTranslations('Profile')
    const Zone = useTimeZone() || process.env.NEXT_PUBLIC_TIMEZONE

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
        locale: locale,
        timeZone: Zone
    }

    const route = useRouter()
    const [path, setPath] = useState('#Information')
    const [componentToShow, setComponentToShow] = useState(<Information {...pageProps}/>)

    // Usando session y definiendo el usuario en el estado
    const {data: session, status} = useSession()
    const [user, setUser] = useState(null)

    // Metodo para traer los datos del usuario, 
    // Puesdes usar la forma que quieras para hacer la peticion.
    const getUser = async () => {
        
        try{
            
            // ¡¡¡¡ YANO USAREMOS ESTO !!!!
            // Usa la funcion `ServicesAsyncRequest` para hacer la peticion.
            // La session siempre tienes enviarla como parametro para la autorizacion.
            // const user = await ServicesAsyncRequest({
            //     method: 'POST', 
            //     path: 'users/get-user', 
            //     body: JSON.stringify({ 
            //         email: session?.user.email
            //     }),
            //     session: session
            // }) 
            // Nota: Usa este metodo preferentemente 
            // para hacer peticiones al backend.
            
            // AHORA USAREMOS FETCH A LA API DE NEXT 
            // (/api/service/ServicesAsyncRequest)
            const request_user_data = 
            await fetch(`${process.env.NEXT_PUBLIC_SERVICE_ENDPOINT_URL}`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user.token}` 
                },
                body: JSON.stringify({ 
                    method: 'POST',
                    path: 'users/get-user',
                    token: session?.user.token,
                    params: {
                        email: session?.user.email
                    }  
                })
            })

            const user_data = await request_user_data.json()

            // console.log('Frontend Request:', {
            //     method: 'POST',
            //     headers: { 
            //         'Content-Type': 'application/json',
            //         'authorization': `Bearer ${session?.user.token}` 
            //     },
            //     body: JSON.stringify({ 
            //         method: 'POST',
            //         path: 'users/get-user',
            //         token: session?.user.token,
            //         params: {
            //             email: session?.user.email
            //         }  
            //     })
            // });
            
            if( !user_data ) throw user

            setUser(user)
            
            return user
        }

        catch( error ){
            return false
        }
        
    }

    useEffect(()=>{
        // if( status === "authenticated")
        //     getUser()
    }, [ session ])


    useEffect(() => {
        route.push('#Information');
    }, []);

    useEffect(() => {
        const pathSelected = route.asPath;

        setPath(pathSelected);
        console.log(pathSelected)
        console.log(route)

        if (pathSelected === '/profile#Information') setComponentToShow(<Information {...pageProps} />);
        if (pathSelected === '/profile#Update-Password') setComponentToShow(<UpdatePassword  {...pageProps} />);
        if (pathSelected === '/profile#My-Offer') setComponentToShow(<MyOffer {...pageProps} />);

    }, [route.asPath])

    return (<>

        <section className='grid grid-cols-1 justify-center items-center w-full text-customGray gap-8 md:gap-16'>

            <h1 className="col-span-1 text-4xl font-extrabold">Perfil</h1>

            {/* PRUEBA MUESTRA USUARIO */}
            { user && (
                <div className='flex flex-row bg-gray-100 p-4 rounded-lg text-sm w-2/4 m-auto'>
                    <pre className='text-left'>
                        { JSON.stringify(user, null, 2) }
                    </pre>
                </div>
            )}
            <button onClick={getUser} className='bg-blue-500 text-white p-2 rounded-lg'>Obtener Usuario</button>
            <div className='col-span-1 font-bold'>
                <ul className="inline-table">
                    <Link href="#Information" className='px-5'>
                        <li className={path === '#Information' ? styles.linkUnderline : styles.underline}>
                            <IoMdInformationCircleOutline size={20} />Mi información
                        </li>
                    </Link>
                    <Link href="#Update-Password" className='px-5'>
                        <li className={path === '#Update-Password' ? styles.linkUnderline : styles.underline}>
                            <SlReload size={18} />Actualizar contraseña
                        </li>
                    </Link>
                    <Link href="#My-Offer" className='px-5'>
                        <li className={path === '#My-Offer' ? styles.linkUnderline : styles.underline}>
                            <MdLocalOffer size={18} />Mi oferta
                        </li>
                    </Link>
                </ul>
            </div>

            <div className='w-full items-center justify-center lg:px-36 xl:px-64'>
                {componentToShow}
            </div>

        </section>

    </>)

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Profile', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}

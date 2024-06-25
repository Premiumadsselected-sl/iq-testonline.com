'use client'
import { AppProps } from 'next/app'
import { useLocale, useTimeZone, useTranslations } from 'next-intl'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { SlReload } from 'react-icons/sl'
import { MdLocalOffer } from 'react-icons/md'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'

// Ejemplo de como se usan las peticiones al backend.
// Importaciones.
import { useSession } from "next-auth/react";
import ServicesAsyncRequest from "@/utils/ServicesAsyncRequest";

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
    const [user, setUser] = useState(session?.user)

    // Metodo para traer los datos del usuario, 
    // Puesdes usar el nombre que quieras para el metodo 
    const getUser = async () => {

        try{
            
            // Usando la funcion ServicesAsyncRequest
            // enviala con estos parametros , 
            // la session siempre tienes que traerla 
            // antes de hacer la peticion,
            const req = await ServicesAsyncRequest({
                method: 'POST', 
                path:'users/get-user',
                body: JSON.stringify({ 
                    email: user?.email
                }),
                session
            })

            const res = await req.json()

            if( res.statusCode !== 200 )
                throw res

            setUser(res)
            
            return res
        }

        catch( error ){
            return false
        }
        
    }

    useEffect(()=>{
        console.log('Hola')
        getUser().then((user)=>{
            console.log(user)
        })
    }, [])


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

'use client'
import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'
import Image from 'next/image'

// - Delete this line.
import PreviewCustomizeComponent from './services/iq-testonline/components/preview/PreviewCustomizeComponent'
import Fade from './services/iq-testonline/components/transitions/Fade'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

type Props = AppProps & {
    children: React.ReactNode
}

interface Nombre {
    name: string;
    city: string;
    image?: string; // Opcional si image está presente en los datos
}

const nombresOriginales: Nombre[] = [
    {
        name: 'Emily Johnson',
        city: 'California - Estados Unidos',
        image: '/assets/preview/cities/California - Estados Unidos.png'
    },
    {
        name: 'Satoshi Yamamoto',
        city: 'Tokio - Japón',
        image: '/assets/preview/cities/Tokio - Japón.png'
    },
    {
        name: 'Jordi López',
        city: 'Cataluña (Catalunya) - España',
        image: '/assets/preview/cities/Cataluña (Catalunya) - España.png'
    },
    {
        name: 'Klaus Müller',
        city: 'Baviera (Bayern) - Alemania',
        image: '/assets/preview/cities/Baviera (Bayern) - Alemania.png'
    },
    {
        name: 'Liam Thompson',
        city: 'Queensland - Australia',
        image: '/assets/preview/cities/Queensland - Australia.png'
    },
    {
        name: 'Philippe Leblanc',
        city: 'Quebec - Canadá',
        image: '/assets/preview/cities/Quebec - Canadá.png'
    },
    {
        name: 'Priya Patel',
        city: 'Rajastán - India',
        image: '/assets/preview/cities/Rajastán - India.png'
    },
    {
        name: 'Thiago Silva',
        city: 'São Paulo - Brasil',
        image: '/assets/preview/cities/São Paulo - Brasil.png'
    },
    {
        name: 'Elena Conti',
        city: 'Toscana (Tuscany) - Italia',
        image: '/assets/preview/cities/Toscana - Italia.png'
    },
    {
        name: 'Sipho Mkhize',
        city: 'Gauteng - Sudáfrica',
        image: '/assets/preview/cities/Gauteng - Sudáfrica.png'
    }
];

export default function Preview({ Component, router, pageProps }: Props) {

    const t = useTranslations('Preview')

    pageProps = {
        ...pageProps,
        t: t,
    }
    
    const [showComponent, setShowComponent] = useState(false);
    const [nombreActual, setNombreActual] = useState<Nombre | null>(null);

    useEffect(() => {
        setShowComponent(true);
    }, []);

    useEffect(() => {
        const mostrarNombreConIntervalo = (index: number) => {
            if (index >= nombresOriginales.length) {
                index = 0;
            }
            const nombreSeleccionado = nombresOriginales[index];
            setNombreActual(nombreSeleccionado);

            setTimeout(() => {
                setNombreActual(null);
                setTimeout(() => {
                    mostrarNombreConIntervalo(index + 1);
                }, 20000);
            }, 10000);
        };

        setTimeout(() => {
            mostrarNombreConIntervalo(0);
        }, 4000);

    }, []);

    return (
        <PWrapper
            Component={Preview}
            pageProps={pageProps}
            router={router}
            translations="Preview"
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            <div className='w-full justify-center items-center px-4 md:px-36'>
                <Fade in={showComponent}>
                    <PreviewCustomizeComponent {...pageProps} />
                </Fade>
            </div>


            {nombreActual && (
                <div role="alert" className="alert fixed bottom-5 left-5 p-4 w-[25%] shadow-xl bg-[#7e22ced4]">
                    <div className="flex items-center">
                        <div className="relative inline-block shrink-0 cursor-pointer">
                            <img
                                className="mask mask-squircle w-16 rounded-full"
                                src={nombreActual.image}
                                alt={nombreActual.city}
                                height={70}
                                width={70}
                            />
                        </div>
                        <div className="ml-3 text-sm font-normal">
                            <div className="text-md font-bold text-white">{nombreActual.name}</div>
                            <div className="text-sm font-extralight text-white">{t('recent_buy')}</div>
                        </div>
                    </div>
                </div>
            )}
        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`../../messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Preview',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
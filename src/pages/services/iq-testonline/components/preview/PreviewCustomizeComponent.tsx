'use client'
import { AppProps } from 'next/app'
import { useTranslations } from 'next-intl'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/navigation'

// Usa la session para obtener el 
// usuario y comprovar que este logeado.
import { useSession } from 'next-auth/react'

import Image from 'next/image'

type Props = AppProps & {
    children: React.ReactNode
}

export default function PreviewCustomizeComponent({ pageProps }: Props) {

    const t = useTranslations('Preview')
    const router = useRouter()
    const { status } = useSession()

    pageProps = {
        ...pageProps,
        t: t,
    }

    const handleContinue = () => {
        
        // Valida si el usuario esta autenticado
        if (status === 'unauthenticated') 
            return router.push('/register')

        // TODO: Falta la comprovacion de la subscripcion
        
        router.push('/payment')
    }

    return (
        <>
            <section className='w-ful text-customGray 2xl:px-48 xl:px-36 lg:px-28'>
                <div className="h-auto w-full  xl:px-24 2xl:px-56">
                    <h1 className='text-md md:text-2xl 2xl:text-3xl font-extrabold my-4 md:my-8'>{t('sumary')}</h1>
                    <div className="bg-white p-4 flex flex-col leading-normal rounded-lg w-full border-customBorderGray border-[1px] shadow-md">
                        <div className="flex w-full mb-6 h-auto justify-center items-center content-center">
                            <div className="grid h-28 sm:h-48 w-[30%] sm:w-auto flex-grow card rounded-box place-items-center p-4">
                                <Image
                                    className="object-cover mx-auto rounded-xl w-[75px] sm:w-[192px] blur-md"
                                    src={`/assets/preview/iqImage.PNG`}
                                    alt={`iqImage.PNG`}
                                    height={0}
                                    width={150}
                                    style={{ height: "auto", width: 'auto' }}
                                    priority // Cargar la imagen con alta prioridad
                                />
                            </div>
                            <div className="grid w-[100%] sm:w-[900px] flex-grow card rounded-box pl-4">
                                <h5 className="mb-3 text-md sm:text-2xl font-semibold text-left ">{t('puntuation')}</h5>
                                <p className="mb-2 text-sm text-left font-light text-gray-500">{t('text_puntuation')}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex w-full mb-6 h-auto justify-center items-center content-center">
                            <div className="grid h-28 sm:h-48 w-20 sm:w-auto flex-grow card rounded-box place-items-center p-4">
                                <Image
                                    className="object-cover mx-auto rounded-xl w-[75px] sm:w-[192px] blur-md"
                                    src={`/assets/paymentForm/certificate-test-es.png`}
                                    alt={`certificate-test-es.png.png`}
                                    height={0}
                                    width={192}
                                    style={{ height: "auto", width: 'auto' }}
                                    priority // Cargar la imagen con alta prioridad
                                />
                            </div>
                            <div className="grid w-[100%] sm:w-[900px] flex-grow card rounded-box pl-4">
                                <h5 className="mb-3 text-md sm:text-2xl font-semibold text-left ">{t('certificate')}</h5>
                                <p className="mb-2 text-sm text-left font-light text-gray-500">{t('text_certificate')}</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 sm:flex sm:flex-row-reverse">
                            <button type="button" onClick={handleContinue} className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-[#7e22ce]`}>{t('button_continue')}</button>
                        </div>
                    </div>
                </div >

                <hr className="w-full rounded-3xl my-16" style={{ height: ".5px", backgroundColor: "#c7c7c7" }} />

                <h1 className='text-md md:text-2xl 2xl:text-3xl font-extrabold mb-4'>{t('opinions_title')}</h1>
                <div className="grid grid-cols-1 justify-items-center gap-5 h-full w-full 2xl:px-28">

                    <div className="flex gap-4 bg-white rounded-lg shadow-md px-4 w-full">
                        <div className="flex-none py-5">
                            <Image
                                className="mask mask-circle w-16  rounded-full"
                                src={`/assets/preview/ivana-cajina.jpg`}
                                alt={`iqImage.PNG`}
                                height={70}
                                width={70}
                                priority // Cargar la imagen con alta prioridad
                            />
                        </div>
                        <div className="py-5">
                            <h3 className="font-semibold text-black/80 item text-start text-sm">Iván Cajina</h3>
                            <p className='text-start text-sm'><time>{t('time_opinion1')}</time></p>
                            <div className="flex mt-5 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div className="leading-6 text-sm mt-4 text-customGray text-start">
                                <p>{t('text_opinion1')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-white rounded-lg shadow-md px-4 w-full">
                        <div className="flex-none py-5">
                            <Image
                                className="mask mask-circle w-16  rounded-full"
                                src={`/assets/preview/jonas-kakaroto.jpg`}
                                alt={`iqImage.PNG`}
                                height={70}
                                width={70}
                                priority // Cargar la imagen con alta prioridad
                            />
                        </div>
                        <div className="py-5">
                            <h3 className="font-semibold text-black/80 item text-start text-sm">Lucas Martinez</h3>
                            <p className='text-start text-sm'><time>{t('time_opinion2')}</time></p>
                            <div className="flex mt-5 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div className="leading-6 text-sm mt-4 text-customGray text-start">
                                <p>{t('text_opinion2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-white rounded-lg shadow-md px-4 w-full">
                        <div className="flex-none py-5">
                            <Image
                                className="mask mask-circle w-16  rounded-full"
                                src={`/assets/preview/joshua-rawson-harris.jpg`}
                                alt={`iqImage.PNG`}
                                height={70}
                                width={70}
                                priority // Cargar la imagen con alta prioridad
                            />
                        </div>
                        <div className="py-5">
                            <h3 className="font-semibold text-black/80 item text-start text-sm">Emma Smith</h3>
                            <p className='text-start text-sm'><time>{t('time_opinion3')}</time></p>
                            <div className="flex mt-5 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-yellow-400 h-5 w-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div className="leading-6 text-sm mt-4 text-customGray text-start">
                                <p>{t('text_opinion3')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Index',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
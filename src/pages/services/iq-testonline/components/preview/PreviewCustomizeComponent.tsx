import { AppProps } from 'next/app'
import { useTranslations } from 'next-intl'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

type Props = AppProps & {
    children: React.ReactNode
}

export default function PreviewCustomizeComponent({ pageProps }: AppProps) {

    const t = useTranslations('Index')

    pageProps = {
        ...pageProps,
        t: t,
    }
    const router = useRouter()

    const handleContinue = () => {
        router.push('/payment');
    }

    return (
        <section className='w-full'>
            <div className="h-auto w-full  xl:px-24 2xl:px-56">
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
                                placeholder="blur" // Utiliza un marcador de posición borroso
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFxABAQEBAAAAAAAAAAAAAAAAAAERAv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuM1UoM1it1igxWa1WaogKoRpIoAqAlZrVZoMVFqAgAPopRKyM1mtViqM1lqoCLBZFCRcWRcBErWJQYrNbrNBzqNVmggAPfqVNSoFZq1mggKomNSEWASNYRQTErSUHOsV0rFBzrFbrNUQAHs1BEBFQACAsaiRqAsVIoDNaSgxXPp0rFBzrFdKxVGRQHpQEBABSADUajMWA1FZUFSiUErFarNBis2N2M4DODWCjogIAACoA0rJoN6usaug1qJpoFSqgM1MawwGcGsAQAABABAU1E1RrV1jV0GtNZ1QaEjUQDFXAZwawByAAABAQBBAXTWVUa1YzFgNxqMRuINRUioAoDgAoAAiACVKAIAosagA1G4CDUaBAAB//Z"
                            />
                        </div>
                        <div className="grid w-[100%] sm:w-[900px] flex-grow card rounded-box pl-4">
                            <h5 className="mb-3 text-md sm:text-2xl font-bold text-left text-black">Puntuación del CI</h5>
                            <p className="mb-2 text-sm text-left font-light text-gray-500">Obtén tu puntuación de CI y un informe detallado sobre tus puntos fuertes y débiles</p>
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
                                placeholder="blur" // Utiliza un marcador de posición borroso
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFxABAQEBAAAAAAAAAAAAAAAAAAERAv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuM1UoM1it1igxWa1WaogKoRpIoAqAlZrVZoMVFqAgAPopRKyM1mtViqM1lqoCLBZFCRcWRcBErWJQYrNbrNBzqNVmggAPfqVNSoFZq1mggKomNSEWASNYRQTErSUHOsV0rFBzrFbrNUQAHs1BEBFQACAsaiRqAsVIoDNaSgxXPp0rFBzrFdKxVGRQHpQEBABSADUajMWA1FZUFSiUErFarNBis2N2M4DODWCjogIAACoA0rJoN6usaug1qJpoFSqgM1MawwGcGsAQAABABAU1E1RrV1jV0GtNZ1QaEjUQDFXAZwawByAAABAQBBAXTWVUa1YzFgNxqMRuINRUioAoDgAoAAiACVKAIAosagA1G4CDUaBAAB//Z"
                            />
                        </div>
                        <div className="grid w-[100%] sm:w-[900px] flex-grow card rounded-box pl-4">
                            <h5 className="mb-3 text-md sm:text-2xl font-bold text-left text-black">Certificado del CI</h5>
                            <p className="mb-2 text-sm text-left font-light text-gray-500">Dado que el coeficiente intelectual esta vinculado a la personalidad, haz un test de personalidad para saber quien eres realmente.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 sm:flex sm:flex-row-reverse">
                        <button type="button" onClick={handleContinue} className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-[#7e22ce]`}>Continuar</button>
                    </div>
                </div>
            </div >
        </section>
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
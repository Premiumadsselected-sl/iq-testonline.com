'use client'
import Image from 'next/image'
import { GetStaticPropsContext } from 'next'
import { AppProps } from 'next/app'

type Props = AppProps & {
    children: React.ReactNode
}

type PageProps = {
    page: number;
};

export default function Question({ page }: PageProps) {
    return (
        <div className="w-11/12 bg-white border border-gray-200 rounded-lg shadow-xl p-5 justify-self-center">
            <Image
                src={`/assets/imagesTest/step${page}/question.png`}
                alt={`question${page}.png`}
                width={718}
                height={718}
                priority // Cargar la imagen con alta prioridad
                placeholder="blur" // Utiliza un marcador de posición borroso
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFxABAQEBAAAAAAAAAAAAAAAAAAERAv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuM1UoM1it1igxWa1WaogKoRpIoAqAlZrVZoMVFqAgAPopRKyM1mtViqM1lqoCLBZFCRcWRcBErWJQYrNbrNBzqNVmggAPfqVNSoFZq1mggKomNSEWASNYRQTErSUHOsV0rFBzrFbrNUQAHs1BEBFQACAsaiRqAsVIoDNaSgxXPp0rFBzrFdKxVGRQHpQEBABSADUajMWA1FZUFSiUErFarNBis2N2M4DODWCjogIAACoA0rJoN6usaug1qJpoFSqgM1MawwGcGsAQAABABAU1E1RrV1jV0GtNZ1QaEjUQDFXAZwawByAAABAQBBAXTWVUa1YzFgNxqMRuINRUioAoDgAoAAiACVKAIAosagA1G4CDUaBAAB//Z" />
        </div>
    );
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
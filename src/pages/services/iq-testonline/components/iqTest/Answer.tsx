'use client'
import Image from 'next/image'
import { GetStaticPropsContext } from 'next'
import { AppProps } from 'next/app'

type Props = AppProps & {
    children: React.ReactNode
}

type PageProps = {
    page: number;
    picture: string
};

export default function Answer({ page, picture }: PageProps) {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl p-5">
            <span className='text-sm md:text-xl text-customGray font-bold capitalize'>{picture}</span>
            <Image
                className='mt-4'
                src={`/assets/imagesTest/step${page}/${picture}.png`}
                alt={`step${page}/${picture}.png`}
                width={500}
                height={500}
                priority // Cargar la imagen con alta prioridad
                placeholder="blur" // Utiliza un marcador de posición borroso
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9oDpEFQAFBFAAABFAQAEAQAAaAUAABQEUUEFARGkBEVAQEBRAHQAAABQAUVBBQERpKDNZrVZqiVCoAADqAAACqigoKgAAiVpmgzWa1WaozUWsgAA7CAKIoKIoNKyqCiACVWaCVitVmqM1FqAgCjsIIKIAqsqDS6yag1pqaaCs01KBWatZqiVABAAdBBRRBBVZUF1dZAa01k0GtTUAKzVQERQEFAaEFABBRAFEAXTUAUQABAAEAAFAaAAAAAAAAABAQAAEAAH/9k="
            />
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
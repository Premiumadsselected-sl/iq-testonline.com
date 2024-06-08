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
            <span className='text-sm md:text-xl text-customGray font-bold'>{picture}</span>
            <Image
                className='mt-4'
                src={`/assets/imagesTest/step${page}/${picture}.png`}
                alt={`step${page}/${picture}.png`}
                width={500}
                height={500}
                // layout='responsive'
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
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
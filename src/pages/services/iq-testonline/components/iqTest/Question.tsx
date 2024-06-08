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
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl p-5">
            <Image
                src={`/assets/imagesTest/step${page}/question.png`}
                alt={`question${page}.png`}
                width={718}
                height={718}
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
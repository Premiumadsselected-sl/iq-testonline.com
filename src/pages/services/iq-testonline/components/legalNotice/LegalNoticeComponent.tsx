'use client'
import { useTranslations } from "next-intl";
import { AppProps } from "next/app";
import { GetStaticPropsContext } from 'next'
import Head from 'next/head';

type Props = AppProps & {
    children: React.ReactNode
}

export default function LegalNoticeComponent({ pageProps }: Props) {

    const t = useTranslations('Legal')
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <div className="flex flex-col flex-wrap justify-start items-start text-left text-customGray">
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8">{t('title')}</h1>
            <p className="mb-6">{t('legal_notice')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}>{t('title2')}</h3>
            <p className="mb-6">{t('intellectual_property')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}>{t('title3')}</h3>
            <p className="mb-6">{t('use_web_site')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}>{t('title4')}</h3>
            <p className="mb-6">{t('links_parties')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}>{t('title5')}</h3>
            <p className="mb-6">{t('limitation_liability')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}>{t('title6')}</h3>
            <p className="mb-6">{t('law_jurisdiction')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}>{t('title7')}</h3>
            <p className="mb-6">{t('changes_legalNotice')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}>{t('title8')}</h3>
            <p>{t('Contact')}</p>
        </div>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Legal', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
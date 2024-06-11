'use client'
import { AppProps } from "next/app"
import { GetStaticPropsContext } from 'next'
import { useTranslations } from "next-intl"
import styles from '@/pages/services/iq-testonline/styles/IndexStyles.module.css'
import Image from 'next/image';

type Props = AppProps & {
    children: React.ReactNode
}

export default function OurTest({ pageProps }: Props) {

    // Para la internalizacion cada pagina debe tener su propio archivo de mensajes
    const t = useTranslations('OurTest') // consulta /messages/[locale].json
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <>
            <section className={styles.OurTestSection}>
                <div className="grid grid-cols-1 gap-20 lg:gap-36 items-center">
                    <div className="col-span-1 px-4 lg:px-24">
                        <h1 className="text-4xl font-extrabold">{t('title')}</h1>
                        <h3 className="text-lg ">{t('subtitle')}</h3>
                    </div>
                    <div className="col-span-1 px-4 lg:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                            <div className="w-full   bg-[#ffffff3e] border border-gray-200 rounded-lg shadow">
                                <Image className="rounded-t-lg" src="/assets/login/cosmos.jpg" alt="" width={800} height={400} />
                                <div className="px-8 py-4 text-start">
                                    <h5 className="text-[16px] font-medium tracking-tight text-purple-700  mb-4">{t('card1Text1')}</h5>
                                    <h6 className="text-[clamp(16px,3vw,24px)] font-extrabold">{t('card1Text2')}</h6>
                                    <p className="mb-3 text-[16px] font-normal text-customGray ">{t('card1Text3')}.</p>
                                </div>
                            </div>
                            <div >
                                <div className="w-full h-max  border border-gray-200 rounded-lg shadow lg:-mt-8 lg:mb-8">
                                    <Image className="rounded-t-lg" src="/assets/login/cosmos.jpg" alt="" width={800} height={400} />
                                    <div className="px-8 py-4 text-start">
                                        <h5 className="text-[16px] font-medium tracking-tight text-purple-700  mb-4">{t('card2Text1')}</h5>
                                        <h6 className="text-[clamp(16px,3vw,24px)] font-extrabold">{t('card2Text2')}</h6>
                                        <p className="mb-3 text-[16px] font-normal text-customGray ">{t('card2Text3')}.</p>
                                    </div>
                                </div>
                                <button className={styles.buttonStartTest}>
                                    <span>{t('buttonTest')}</span>
                                </button>
                            </div>
                            <div className="w-full bg-[#ffffff3e] border border-gray-200 rounded-lg shadow">
                                <Image className="rounded-t-lg" src="/assets/login/cosmos.jpg" alt="" width={800} height={400} />
                                <div className="px-8 py-4 text-start">
                                    <h5 className="text-[16px] font-medium tracking-tight text-purple-700  mb-4">{t('card3Text1')}</h5>
                                    <h6 className="text-[clamp(16px,3vw,24px)] font-extrabold">{t('card3Text2')}</h6>
                                    <p className="mb-3 text-[16px] font-normal text-customGray ">{t('card3Text3')}.</p>
                                </div>
                            </div>
                            <button className={styles.buttonStartTestMobile}>
                                <span>{t('buttonTest')}</span>
                            </button>

                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'OurTest', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
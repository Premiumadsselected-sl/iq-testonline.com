'use client'
import { useTranslations } from "next-intl"
import { AppProps } from "next/app"
import Link from "next/link"
import { FaArrowRight, FaCheck } from "react-icons/fa"
import { TbClick } from "react-icons/tb"
import styles from '@/pages/services/iq-testonline/styles/IndexStyles.module.css'
import Image from 'next/image'
import { GetStaticPropsContext } from 'next'

type Props = AppProps & {
    t: any
}

export default function IndexComponent({ pageProps }: Props) {

    const t = useTranslations('Index')

    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <>
            <section className={styles.section}>
                <div className={styles.divSection}>
                    <div className="place-self-center lg:mb-10 col-span-2 lg:col-span-1">
                        <h1 className={styles.h1}>
                            {t('title')}
                        </h1>
                        <p className={styles.pInitial}>
                            {t('subtitle')}
                        </p>
                        <div className="flex justify-center items-center ml-6 mb-4">
                            <Link href="/app" >
                                <button className={styles.buttonTest}>
                                    {t('button_test')}
                                    <FaArrowRight className="ml-6" />
                                </button>
                            </Link>
                        </div>
                        <div className="">
                            <div className="flex justify-center items-center space-x-2">
                                <FaCheck size={25} />
                                <span>9,657  {t('average_today')}</span>
                            </div>
                            <div className="flex justify-center items-center space-x-1 -ml-4">
                                <TbClick size={30} />
                                <span>102 {t('average_today')}</span>
                            </div>

                        </div>
                    </div>

                    <div className="place-self-stretch xl:place-self-center col-span-2 lg:col-span-1">
                        <Link href="/app" className="hidden md:inline-block place-self-center w-[80%] xl:w-[80%]">
                            <Image src="/assets/home/IndexImg.png" alt="hero image" width={800} height={600} className="shadow-2xl transition-transform duration-300 transform hover:scale-110 rounded-[20px]" style={{ boxShadow: "-8px -8px 30px 0px rgb(126 34 206 / 30%), 0 0px 0px -5px rgb(126 34 206 / 35%)" }} />
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 col-span-2">
                        <p><span className="text-6xl font-black subjectivy-black">25</span>{t('qty_questions')}</p>
                        <p><span className="text-6xl font-black subjectivy-black">20</span>{t('max_minutes')}</p>
                        <p><span className="text-6xl font-black subjectivy-black">100%</span>{t('precision')}</p>
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
            translationNamespace: 'Index', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
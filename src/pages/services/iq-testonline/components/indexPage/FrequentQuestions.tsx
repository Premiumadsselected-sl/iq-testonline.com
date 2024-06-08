'use client'
import { AbstractIntlMessages, NamespaceKeys, useLocale, useMessages, useTimeZone, useTranslations } from "next-intl"
import { AppProps } from "next/app"
import styles from '@/pages/services/iq-testonline/styles/IndexStyles.module.css'
import Image from 'next/image';
import { GetStaticPropsContext } from 'next'

type Props = AppProps & {
    t: any
}

export default function FrequentQuestions({ pageProps }: Props) {

    //TODO: aplicar el json translate al documento !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // Para la internalizacion cada pagina debe tener su propio archivo de mensajes
    const t = useTranslations('FrequentQuestions') // consulta /messages/[locale].json
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <>
            <section className={styles.OurTestSection}>
                <div className="grid grid-cols-1 gap-20 lg:gap-18 items-center">
                    <div className="col-span-1 px-4 lg:px-24">
                        <h1 className="text-4xl font-extrabold">{t('title')}</h1>
                        <h3 className="text-lg ">{t('subtitle')}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6 pl-10 lg:pl-24">
                        <div className="col-span-2 md:col-span-1 text-left ">
                            <h1 className="text-2xl font-bold text-[20px]  lg:mb-2">{t('question1')}</h1>
                            <h3 className="text-[1rem]">{t('answer1')}</h3>
                        </div>
                        <div className="col-span-2 md:col-span-1 text-left">
                            <h1 className="text-2xl font-bold text-[20px]  mb-2">{t('question2')}</h1>
                            <h3 className="text-[1rem]">{t('answer2')}</h3>
                        </div>
                        <div className="col-span-2 md:col-span-1 text-left ">
                            <h1 className="text-2xl font-bold text-[20px]  mb-2">{t('question3')}</h1>
                            <h3 className="text-[1rem]">{t('answer3')}</h3>
                        </div>
                        <div className="col-span-2 md:col-span-1 text-left ">
                            <h1 className="text-2xl font-bold text-[20px]  mb-2">{t('question4')}</h1>
                            <h3 className="text-[1rem]">{t('answer4')}</h3>
                        </div>
                        <div className="col-span-2">
                            <button className={styles.buttonStartTestQuestions}>
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
            translationNamespace: 'FrequentQuestions', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
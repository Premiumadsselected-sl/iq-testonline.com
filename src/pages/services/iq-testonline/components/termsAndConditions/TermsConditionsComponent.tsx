'use client'
import { useTranslations } from "next-intl"
import Link from "next/link"
import { GetStaticPropsContext } from 'next'
import { AppProps } from "next/app"
import Head from 'next/head';

type Props = AppProps & {
    t: any
}

export default function TermsConditionsComponent({ pageProps }: Props) {

    const t = useTranslations('Terms')
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
            <p className="mb-6">{t('terms')}</p>
            <h3 className="text-3xl font-extrabold">{t('title2')}</h3>
            <a href="#Descripción-del-Servicio" className="text-blue-600 cursor-pointer">{t('content_link1')}</a>
            <a href="#Uso-del-Servicio" className="text-blue-600 cursor-pointer">{t('content_link2')}</a>
            <a href="#Propiedad-Intelectual" className="text-blue-600 cursor-pointer">{t('content_link3')}</a>
            <a href="#Limitación-de-Responsabilidad" className="text-blue-600 cursor-pointer">{t('content_link4')}</a>
            <a href="#Modificaciones-del-Servicio-y-Precios" className="text-blue-600 cursor-pointer">{t('content_link5')}</a>
            <a href="#Terminación" className="text-blue-600 cursor-pointer">{t('content_link6')}</a>
            <a href="#Suscripción-y-Pago" className="text-blue-600 cursor-pointer">{t('content_link7')}</a>
            <a href="#Ley-Aplicable-y-Resolución-de-Litigios" className="text-blue-600 cursor-pointer">{t('content_link8')}</a>
            <a href="#Cumplimiento-Legal" className="text-blue-600 cursor-pointer">{t('content_link9')}</a>
            <a href="#Exención-de-Responsabilidad" className="text-blue-600 cursor-pointer">{t('content_link10')}</a>
            <a href="#Exención_de_Responsabilidad_Médica" className="text-blue-600 cursor-pointer mb-6">{t('content_link11')}</a>
            <a href="#Indemnización" className="text-blue-600 cursor-pointer mb-6">{t('content_link12')}</a>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Descripción-del-Servicio">{t('title3')}</h3>
            <p className="mb-6">{t('description_service')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Uso-del-Servicio">{t('title4')}</h3>
            <div className="mb-6">
                <ul className="list-disc ml-12">
                    <li>{t('use_service_text1')}</li>
                    <li>{t('use_service_text2')}</li>
                    <li>{t('use_service_text3')}</li>
                </ul>
            </div>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Propiedad-Intelectual">{t('title5')}</h3>
            <p className="mb-6">{t('intellectual_property')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Limitación-de-Responsabilidad">{t('title6')}</h3>
            <p className="mb-6">{t('limitation_liability')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Modificaciones-del-Servicio-y-Precios">{t('title7')}</h3>
            <p className="mb-6">{t('pricing_and_service')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Terminación">{t('title8')}</h3>
            <p className="mb-6">{t('termination_text')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Suscripción-y-Pago">{t('title9')}</h3>
            <div className="mb-6">
                <ul className="list-disc ml-12">
                    <li>{t('suscription_pay_text1')}</li>
                    <li>{t('suscription_pay_text2')}</li>
                    <li>{t('suscription_pay_text3')}</li>
                </ul>
            </div>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Ley-Aplicable-y-Resolución-de-Litigios">{t('title10')}</h3>
            <p className="mb-6">{t('applicable_law')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Cumplimiento-Legal">{t('title11')}</h3>
            <p className="mb-6">{t('legal_compliance')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Exención-de-Responsabilidad">{t('title12')}</h3>
            <p className="mb-6">{t('disclaimer')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Exención-de-Responsabilidad">{t('title13')}</h3>
            <p className="mb-6">{t('medical_liability_waiver')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Indemnización">{t('title13')}</h3>
            <p className="mb-6">{t('compensation')}</p>
            <p className="mb-6">{t('update')}</p>

            <style jsx global>{`html {scroll-behavior: smooth;}`}</style>
        </div>

    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Terms', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
'use client'
import { useTranslations } from "next-intl"
import { GetStaticPropsContext } from 'next'
import { AppProps } from "next/app"
import Head from 'next/head';

type Props = AppProps & {
    children: React.ReactNode
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
            <a href="#Planes-y-Precios" className="text-blue-600 cursor-pointer">{t('content_link7')}</a>
            <a href="#Servicios-Incluidos-en-los-Planes" className="text-blue-600 cursor-pointer">{t('content_link8')}</a>
            <a href="#Ley-Aplicable-y-Resolución-de-Litigios" className="text-blue-600 cursor-pointer">{t('content_link9')}</a>
            <a href="#Cumplimiento-Legal" className="text-blue-600 cursor-pointer">{t('content_link10')}</a>
            <a href="#Exención-de-Responsabilidad" className="text-blue-600 cursor-pointer">{t('content_link11')}</a>
            <a href="#Exención-de-Responsabilidad-Médica" className="text-blue-600 cursor-pointer">{t('content_link12')}</a>
            <a href="#Indemnización" className="text-blue-600 cursor-pointer">{t('content_link13')}</a>
            <a href="#Política-de-Devoluciones" className="text-blue-600 cursor-pointer mb-6">{t('content_link14')}</a>

            <ol className="list-none pl-0 counter-reset-section">

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Descripción-del-Servicio">1.&nbsp;{t('title3')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">1.1.&nbsp;</span>
                            <span>{t('description_service1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span>{t('description_service1')}</span>
                        </li>
                        <div>
                            <ul className="list-disc pl-10">
                                <li><strong>{t('description_service3')}&nbsp;</strong>{t('description_service4')}</li>
                                <li><strong>{t('description_service5')}&nbsp;</strong>{t('description_service6')}</li>
                                <li><strong>{t('description_service7')}&nbsp;</strong>{t('description_service8')}</li>
                            </ul>
                        </div>
                    </ol>
                </li>


                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Uso-del-Servicio">2.&nbsp;{t('title4')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">2.1.&nbsp;</span>
                            <span><strong>{t('use_service_text1')}</strong>&nbsp;{t('use_service_text2')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">2.2.&nbsp;</span>
                            <span><strong>{t('use_service_text3')}</strong>&nbsp;{t('use_service_text4')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">2.3.&nbsp;</span>
                            <span><strong>{t('use_service_text5')}</strong>&nbsp;{t('use_service_text6')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">2.4.&nbsp;</span>
                            <span><strong>{t('use_service_text7')}</strong>&nbsp;{t('use_service_text8')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">2.5.&nbsp;</span>
                            <span><strong>{t('use_service_text9')}</strong>&nbsp;{t('use_service_text10')}</span>
                        </li>
                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Propiedad-Intelectual">3.&nbsp;{t('title5')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">3.1.&nbsp;</span>
                            <span>{t('intellectual_property1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">3.2.&nbsp;</span>
                            <span>{t('intellectual_property2')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">3.3.&nbsp;</span>
                            <span>{t('intellectual_property3')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Limitación-de-Responsabilidad">4.&nbsp;{t('title6')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">4.1.&nbsp;</span>
                            <span>{t('limitation_liability1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">4.2.&nbsp;</span>
                            <span>{t('limitation_liability2')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">4.3.&nbsp;</span>
                            <span>{t('limitation_liability3')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Modificaciones-del-Servicio-y-Precios">5.&nbsp;{t('title7')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">5.1.&nbsp;</span>
                            <span>{t('pricing_and_service1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">5.2.&nbsp;</span>
                            <span>{t('pricing_and_service2')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">5.3.&nbsp;</span>
                            <span>{t('pricing_and_service3')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Terminación">6.&nbsp;{t('title8')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">6.1.&nbsp;</span>
                            <span>{t('pricing_and_service1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">6.2.&nbsp;</span>
                            <span>{t('pricing_and_service2')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">6.3.&nbsp;</span>
                            <span>{t('pricing_and_service3')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Planes-y-Precios">7.&nbsp;{t('title9')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">7.1.&nbsp;</span>
                            <span><strong>{t('plan_pricing1')}</strong>&nbsp;{t('plan_pricing2')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">7.2.&nbsp;</span>
                            <span><strong>{t('plan_pricing3')}</strong>&nbsp;{t('plan_pricing4')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">7.3.&nbsp;</span>
                            <span><strong>{t('plan_pricing5')}</strong>&nbsp;{t('plan_pricing6')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">7.4.&nbsp;</span>
                            <span><strong>{t('plan_pricing7')}</strong>&nbsp;{t('plan_pricing8')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Servicios-Incluidos-en-los-Planes">8.&nbsp;{t('title10')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">8.1.&nbsp;</span>
                            <span>{t('services_include1')}</span>
                        </li>
                        <div>
                            <ul className="list-disc pl-10">
                                <li><strong>{t('services_include2')}&nbsp;</strong>{t('services_include3')}</li>
                                <li><strong>{t('services_include4')}&nbsp;</strong>{t('services_include5')}</li>
                                <li><strong>{t('services_include6')}&nbsp;</strong>{t('services_include7')}</li>
                            </ul>
                        </div>
                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Ley-Aplicable-y-Resolución-de-Litigios">9.&nbsp;{t('title11')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">9.1.&nbsp;</span>
                            <span>{t('applicable_law1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">9.2.&nbsp;</span>
                            <span>{t('applicable_law2')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">9.3.&nbsp;</span>
                            <span>{t('applicable_law3')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Cumplimiento-Legal">10.&nbsp;{t('title12')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">10.1.&nbsp;</span>
                            <span>{t('legal_compliance1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">10.2.&nbsp;</span>
                            <span>{t('legal_compliance2')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Exención-de-Responsabilidad">11.&nbsp;{t('title13')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">11.1.&nbsp;</span>
                            <span>{t('disclaimer_text1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">11.2.&nbsp;</span>
                            <span>{t('disclaimer_text2')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Exención-de-Responsabilidad-Médica">12.&nbsp;{t('title14')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">12.1.&nbsp;</span>
                            <span>{t('medical_liability_waiver1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">12.2.&nbsp;</span>
                            <span>{t('medical_liability_waiver2')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Indemnización">13.&nbsp;{t('title15')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">13.1.&nbsp;</span>
                            <span>{t('compensation_text1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">13.2.&nbsp;</span>
                            <span>{t('compensation_text2')}</span>
                        </li>

                    </ol>
                </li>

                <li className="counter-increment-section mb-6">
                    <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Política-de-Devoluciones">14.&nbsp;{t('title16')}</h3>
                    <ol className="counter-reset-subsection pl-5 list-none">
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">14.1.&nbsp;</span>
                            <span>{t('return_policy1')}</span>
                        </li>
                        <li className="counter-increment-subsection mb-6">
                            <span className=" font-bold">14.2.&nbsp;</span>
                            <span>{t('return_policy2')}</span>
                        </li>

                    </ol>
                </li>

            </ol>
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
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
import { useTranslations } from "next-intl"
import { AppProps } from "next/app"
import Head from 'next/head';

type Props = AppProps & {
    t: any
}
export default function PrivacyPolicyComponent({ pageProps }: Props) {

    const t = useTranslations('Privacy')
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
            <p className="mb-6">{t('policy')}</p>
            <h3 className="text-3xl font-extrabold">{t('title2')}</h3>
            <a href="#Información-que-Recopilamos" className="text-blue-600 cursor-pointer">{t('content_link1')}</a>
            <a href="#Uso-de-la-Información" className="text-blue-600 cursor-pointer">{t('content_link2')}</a>
            <a href="#Compartir-Información" className="text-blue-600 cursor-pointer">{t('content_link3')}</a>
            <a href="#Cookies-y-Tecnologías-Similares" className="text-blue-600 cursor-pointer">{t('content_link4')}</a>
            <a href="#Seguridad-de-la-Información" className="text-blue-600 cursor-pointer">{t('content_link5')}</a>
            <a href="#Derechos-de-Privacidad-de-los-Usuarios" className="text-blue-600 cursor-pointer">{t('content_link6')}</a>
            <a href="#Cambios-en-la-Política-de-Privacidad" className="text-blue-600 cursor-pointer">{t('content_link7')}</a>
            <a href="#Contacto" className="text-blue-600 cursor-pointer mb-6">{t('content_link8')}</a>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Información-que-Recopilamos">{t('title3')}</h3>
            <div className="mb-6">
                <ul className="list-disc ml-12">
                    <li>{t('information_collect_text1')}</li>
                    <li>{t('information_collect_text2')}</li>
                    <li>{t('information_collect_text3')}</li>
                    <li>{t('information_collect_text4')}</li>
                </ul>
            </div>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Uso-de-la-Información">{t('title4')}</h3>
            <p className="mb-6">{t('use_information_text1')}</p>
            <div className="mb-6">
                <ul className="list-disc ml-12">
                    <li>{t('use_information_text2')}</li>
                    <li>{t('use_information_text3')}</li>
                    <li>{t('use_information_text4')}</li>
                    <li>{t('use_information_text5')}</li>
                    <li>{t('use_information_text6')}</li>
                </ul>
            </div>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Compartir-Información">{t('title5')}</h3>
            <p className="mb-6">{t('share_information_text1')}</p>
            <div className="mb-6">
                <ul className="list-disc ml-12">
                    <li>{t('share_information_text2')}</li>
                    <li>{t('share_information_text3')}</li>
                    <li>{t('share_information_text4')}</li>
                </ul>
            </div>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Cookies-y-Tecnologías-Similares">{t('title6')}</h3>
            <p className="mb-6">{t('cookies_text')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Seguridad-de-la-Información">{t('title7')}</h3>
            <p className="mb-6">{t('security_information')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Derechos-de-Privacidad-de-los-Usuarios">{t('title8')}</h3>
            <p className="mb-6">{t('privacy_rights')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Cambios-en-la-Política-de-Privacidad">{t('title9')}</h3>
            <p className="mb-6">{t('changes_privacy_policy')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Contacto">{t('title10')}</h3>
            <p className="mb-6">{t('contact')}</p>
            <p className="mb-6">{t('update_page_privacy_policy')}</p>


            <style jsx global>{`html {scroll-behavior: smooth;}`}</style>
        </div>

    );
}
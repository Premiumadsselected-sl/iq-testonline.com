import { useTranslations } from "next-intl";
import { AppProps } from "next/app";

type Props = AppProps & {
    t: any
}
export default function LegalNoticeComponent({ pageProps }: Props) {

    const t = useTranslations('Legal')
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <div className="flex flex-col flex-wrap justify-start items-start text-left text-customGray">
            <h1 className="text-6xl font-extrabold mb-2">{t('title')}</h1>
            <p>{t('address')}</p>
            <h3 className="text-2xl font-extrabold mt-4">{t('title2')}</h3>
            <p>{t('addressComplete')}</p>
            <p>{t('contact')}</p>
            <p><strong>{t('representation')}</strong> {t('legalRepresentation')}</p>
            <p><strong>{t('director')}</strong> {t('directorPublications')}</p>
            <p><strong>{t('manager')}</strong> {t('webManager')}</p>
            <p><strong>{t('hosting')}</strong> {t('webHosting')}</p>
            <p>{t('thePublisher')}</p>
            <p>{t('innospark')}</p>
        </div>

    );
}
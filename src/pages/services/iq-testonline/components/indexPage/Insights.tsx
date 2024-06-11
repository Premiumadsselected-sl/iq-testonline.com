import { AppProps } from 'next/app';
import { GetStaticPropsContext } from 'next'

//Styles
import styles from '@/pages/services/iq-testonline/styles/IndexStyles.module.css'
import { useTranslations } from 'next-intl';

type Props = AppProps & {
    children: React.ReactNode
}

//TODO: agregar internacionalización a los textos

export default function Insights({ pageProps }: Props) {

    const t = useTranslations('FrequentQuestions') // consulta /messages/[locale].json
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <section>
            <div className={styles.numbersWrapper}>
                <div className={styles.divNumber}>
                    <div className={styles.numberWrapper}>
                        <div className={styles.highlightNumber} data-purecounter-duration="0">1000</div>
                        <div className={styles.highlightNumber}>+</div>
                    </div>
                    <div className={styles.subtitleMedium}>Clientes satisfechos</div>
                </div>
                <div className={styles.divVerticalDivider} style={{color: "#7e22ce !important"}}></div>
                <div className={styles.divNumber}>
                    <div className={styles.numberWrapper}>
                        <div className={styles.highlightNumber} data-purecounter-duration="0">10</div>
                        <div className={styles.highlightNumber} >+</div>
                    </div>
                    <div className={styles.subtitleMedium}>Idiomas</div>
                </div>
                <div className={styles.divVerticalDivider}></div>
                <div className={styles.divNumber}>
                    <div className={styles.numberWrapper}>
                        <div className={styles.highlightNumber} data-purecounter-duration="0">100k</div>
                        <div className={styles.highlightNumber}>+</div>
                    </div>
                    <div className={styles.subtitleMedium}>Test por mes</div>
                </div>
                <div className={styles.divVerticalDivider}></div>
                <div className={styles.divNumber}>
                    <div className={styles.numberWrapper}>
                        <div className={styles.highlightNumber} data-purecounter-duration="0">500k</div>
                        <div className={styles.highlightNumber}>+</div>
                    </div>
                    <div className={styles.subtitleMedium}>Visitantes</div>
                </div>
            </div >
        </section>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Index',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
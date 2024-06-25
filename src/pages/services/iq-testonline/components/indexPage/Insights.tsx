import { AppProps } from 'next/app';
import { GetStaticPropsContext } from 'next'

//Styles
import styles from '@/pages/services/iq-testonline/styles/IndexStyles.module.css'
import { useTranslations } from 'next-intl';

type Props = AppProps & {
    children: React.ReactNode
}

export default function Insights({ pageProps }: Props) {

    const t = useTranslations('Insights') // consulta /messages/[locale].json
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <section className='2xl:px-48 xl:px-28'>
            <div className={styles.numbersWrapper}>
                <div className={styles.divNumber}>
                    <div className={styles.numberWrapper}>
                        <div className={styles.highlightNumber} >{t('client_number')}</div>
                        <div className={styles.highlightNumber}>+</div>
                    </div>
                    <div className={styles.subtitleMedium}>{t('client_text')}</div>
                </div>
                <div className={styles.divVerticalDivider} style={{color: "#7e22ce !important"}}></div>
                <div className={styles.divNumber}>
                    <div className={styles.numberWrapper}>
                        <div className={styles.highlightNumber} >{t('languages_number')}</div>
                        <div className={styles.highlightNumber} >+</div>
                    </div>
                    <div className={styles.subtitleMedium}>{t('languages_text')}</div>
                </div>
                <div className={styles.divVerticalDivider}></div>
                <div className={styles.divNumber}>
                    <div className={styles.numberWrapper}>
                        <div className={styles.highlightNumber} >{t('tests_number')}</div>
                        <div className={styles.highlightNumber}>+</div>
                    </div>
                    <div className={styles.subtitleMedium}>{t('tests_text')}</div>
                </div>
                <div className={styles.divVerticalDivider}></div>
                <div className={styles.divNumber}>
                    <div className={styles.numberWrapper}>
                        <div className={styles.highlightNumber} >{t('visitors_number')}</div>
                        <div className={styles.highlightNumber}>+</div>
                    </div>
                    <div className={styles.subtitleMedium}>{t('visitors_text')}</div>
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
            translationNamespace: 'Insights',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
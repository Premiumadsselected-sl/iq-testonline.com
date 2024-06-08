'use client'
import { useLocale, useTimeZone, useTranslations } from 'next-intl';
import Image from 'next/image'
import { AppProps } from 'next/app';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { GetStaticPropsContext } from 'next'

//Styles
import styles  from '@/pages/services/iq-testonline/styles/PaymentStyles.module.css'

type Props = AppProps & {
    children: React.ReactNode
}

export default function CustomizePaymentForm({ router, pageProps }: AppProps) {

    const locale = useLocale()
    const t = useTranslations('Payment')
    const Zone = useTimeZone() || process.env.NEXT_PUBLIC_TIMEZONE

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
        locale: locale,
        timeZone: Zone
    }

    return (
        <div className="grid grid-cols-3 gap-x-0 gap-y-10">

            <div className="col-span-3 justify-center items-center  ">
                <h1 className="text-3xl md:text-5xl font-extrabold text-customGray">{t('title_page')}</h1>
            </div>

            <div className="col-span-3 md:col-span-2 justify-center items-center md:pr-36">
                <div className="bg-white p-4 flex flex-col leading-normal rounded-lg w-full border-customBorderGray border-[1px] shadow-md h-[70vh]">
                    {/* Aquí va formulario de pago */}
                </div>
            </div>

            <div className="col-span-3 md:col-span-1 justify-center items-center pb-8 gap-10">
                <h3 className="text-xl md:text-2xl  text-customGray text-start font-semibold">{t('sumary')}</h3>
                <div className="py-4 ">
                    <Image src="/assets/paymentForm/certificate-test-es.png" width={291} height={291} className="shadow-md" alt="certificate-test-es.png" />
                </div>
                <p className={styles.checkText}><FaRegCircleCheck size={14} />&nbsp; {t('check_text1')}</p>
                <p className={styles.checkText}><FaRegCircleCheck size={14} />&nbsp; {t('check_text2')}</p>
                <p className={styles.checkText}><FaRegCircleCheck size={14} />&nbsp; {t('check_text3')}</p>
                <p className={styles.checkText}><FaRegCircleCheck size={14} />&nbsp; {t('check_text4')}</p>
                <p className={styles.checkText}><FaRegCircleCheck size={14} />&nbsp; {t('check_text5')}</p>
                <p className={styles.checkText}><FaRegCircleCheck size={14} />&nbsp; {t('check_text6')}</p>
                <p className={styles.checkText}><FaRegCircleCheck size={14} />&nbsp; {t('check_text7')}</p>
                <p className={styles.subtitles}>{t('progressive_level')}</p>
                <p className={styles.explanations}>{t('progressive_level_text')}</p>
                <p className={styles.subtitles}>{t('best_plan')}</p>
                <p className={styles.explanations}>{t('best_plan_text')}</p>
                <p className={styles.subtitles}>{t('brain_games')}</p>
                <p className={styles.explanations}>{t('brain_games_text')}</p>
                <p className={styles.subtitles}>{t('learn_resources')}</p>
                <p className={styles.explanations}>{t('learn_resources_text')}</p>
                <p className="text-customGray text-[13px] text-start font-normal pt-5 mb-1">{t('trial')}</p>
                <p className={styles.explanations}>{t('secure_payment')}</p>
            </div>
        </div >
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Payment', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}
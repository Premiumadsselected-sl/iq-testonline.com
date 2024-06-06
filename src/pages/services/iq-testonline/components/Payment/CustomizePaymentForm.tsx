import { useLocale, useTimeZone, useTranslations } from 'next-intl';
import Image from 'next/image'
import { AppProps } from 'next/app';
import { FaRegCircleCheck } from 'react-icons/fa6';

//Styles
import styles from '@/pages/services/iq-testonline/styles/PaymentStyles.module.css'
import { GiPadlock } from 'react-icons/gi';
import LegalNoticeComponent from '../legalNotice/LegalNoticeComponent';
import { useState } from 'react';

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

    const [showDialog, setDialog] = useState(true)

    return (
        <div className="grid grid-cols-3 gap-x-0 gap-y-10">
            {showDialog &&
                <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className='p-4 sm:px-8 sm:py-4'>
                                    <LegalNoticeComponent {...pageProps} />
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" onClick={()=>{setDialog(!showDialog)}} className="inline-flex w-full justify-center rounded-md bg-[#7e22ce] px-3 py-2 text-sm font-semibold text-white shadow-sm">{t('accept_conditions')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="col-span-3 justify-center items-center  ">
                <h1 className="text-3xl md:text-5xl font-extrabold text-customGray">{t('title_page')}</h1>
            </div>

            <div className="col-span-3 md:col-span-2 justify-center items-center md:pr-36">
                <div className="bg-white p-4 flex flex-col leading-normal rounded-lg w-full border-customBorderGray border-[1px] shadow-md h-[70vh]">
                    {/* Formulario de pago */}
                    <div className='grid grid-cols-1 text-start text-customGray gap-2'>
                        <div>
                            <h1 className='text-xl font-semibold md:text-3xl'>{t('title_form_pay')}</h1>
                            <p className='inline-flex items-center text-sm md:text-base'> <GiPadlock size={18} className='mr-1' />{t('subtitle_form_pay')}</p>
                        </div>
                        <div className="text-start">
                            <label className="required font-semibold text-sm">{t('input1_form_pay')}</label>
                            <input type="name_lastname" id="name_lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-purple-700 focus:border-none block w-full mt-0 p-3.5" placeholder={t('input1_form_pay_placeholder')} />
                        </div>
                    </div>
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
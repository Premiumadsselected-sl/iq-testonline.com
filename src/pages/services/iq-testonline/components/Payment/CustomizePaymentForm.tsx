'use client'
import { useLocale, useTimeZone, useTranslations } from 'next-intl';
import Image from 'next/image'
import { AppProps } from 'next/app';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { GetStaticPropsContext } from 'next'
import TefpayPaymentForm from '@/components/private/Payments/tefpay/TefpayPaymentForm'

//Styles
import styles from '@/pages/services/iq-testonline/styles/PaymentStyles.module.css'
import { GiPadlock } from 'react-icons/gi';
import LegalNoticeComponent from '../legalNotice/LegalNoticeComponent';
import { useState } from 'react';

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

    const [showDialog, setDialog] = useState(true)
    const [checkbox, setCheckbox] = useState(true)

    return (
        <div className="grid grid-cols-3 gap-x-0 gap-y-10">
            {showDialog &&
                <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[50vw]">
                                <div className='grid grid-cols-1 px-4 py-4 sm:px-8 sm:py-4 gap-6'>
                                    <LegalNoticeComponent {...pageProps} />
                                    <div className=" inline-flex items-center">
                                        <label
                                            className="relative flex cursor-pointer items-center rounded-full mr-2"
                                        >
                                            <input
                                                id="checkbox"
                                                type="checkbox"
                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#7e22ce] checked:bg-[#7e22ce] checked:before:bg-[#7e22ce] hover:before:opacity-10"
                                                onClick={() => setCheckbox(!checkbox)}
                                            />
                                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3.5 w-3.5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    stroke-width="1"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </label>
                                        <label
                                            className="mt-px cursor-pointer select-none font-light text-gray-700"
                                        >
                                            {t('accept_conditions')}
                                        </label>
                                    </div>
                                    <div className="bg-gray-50 sm:flex sm:flex-row-reverse">
                                        <button type="button" disabled={checkbox} onClick={() => { setDialog(!showDialog) }} className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${checkbox ? 'bg-gray-400' : 'bg-[#7e22ce]'}`}>{t('continue')}</button>
                                    </div>
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
                   
                    <div className='grid grid-cols-1 text-start text-customGray gap-2'>
                        
                        <div className='px-20'>
                            <h1 className='text-xl font-semibold md:text-3xl'>{t('title_form_pay')}</h1>
                            <p className='inline-flex items-center text-sm md:text-base'> <GiPadlock size={18} className='mr-1' />{t('subtitle_form_pay')}</p>
                        </div>
                        
                        {/* Formulario de pago */}
                        <TefpayPaymentForm />

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

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Payment', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
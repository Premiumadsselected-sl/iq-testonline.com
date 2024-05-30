'use client'

import { useLocale, useTranslations, useMessages, useTimeZone } from 'next-intl'


const Footer = () => {
    
    const dateYear = new Date().getFullYear()

    const t = useTranslations('Footer') 
    const messages = useMessages()
    const { Iqtest } = messages


    return (
        <footer className="flex p-4 mt-8 flex-col w-full text-center" id="footer">
            
            <section id="service-footer">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="max-w-screen-xl py-6 w-full">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('our_services')}</h3>
                            <ul>
                                <li className="mb-4">
                                    <a href="/login" className="hover:underline">{t('signin')}</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/register" className="hover:underline">{t('signup')}</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/app" className="hover:underline">{t('test')}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('legal')}</h3>
                            <ul>
                                <li className="mb-4">
                                    <a href="/legal" className="hover:underline">{t('legal_notice')}</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/terms" className="hover:underline">{t('general_conditions')}</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/privacy" className="hover:underline">{t('privacy_policy')}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('about')}</h3>
                            <ul>
                                <li className="mb-4">
                                    <a href="/contact" className="hover:underline">{t('contact_us')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </section>
            
            <section className="flex flex-col m-4 mt-8 text-center" id="copy-footer">
                &copy; ADSSELECTED S.L. All rights reserved. {dateYear}
            </section>

        </footer>
    )
}

export default Footer
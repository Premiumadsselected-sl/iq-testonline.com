import { AppProps } from "next/app"
import { useTranslations, useMessages } from 'next-intl'

export default function CustomizeFooter({ }: AppProps) {

    const t = useTranslations('Footer')

    return (
        <>
            <div className="max-w-screen-xl py-6 w-full">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('our_services')}</h3>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/login" className="hover:underline">{t('signin')}</a>
                            </li>
                            <li className="mb-4">
                                <a href="/register" className="hover:underline">{t('signup')}</a>
                            </li>
                            <li className="mb-4">
                                <a href="/iqtest" className="hover:underline">{t('test')}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('legal')}</h3>
                        <ul className="text-gray-500 dark:text-gray-400">
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
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/contact" className="hover:underline">{t('contact_us')}</a>
                            </li>
                            <li className="mb-4">
                                <span className="hover:underline"><strong>support@iq-testonline.com</strong></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-layout mx-auto mt-16 text-center">
                    <p className="text-sm text-gray-500 underline" style={{ fontSize: '12px' }}>{t('rights')}<br /></p>
                </div>
            </div>
        </>
    )

}
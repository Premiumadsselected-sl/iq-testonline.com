import { AppProps } from "next/app"
import { useLocale, useTranslations, useMessages, useTimeZone } from 'next-intl'

export default function CustomizeFooter({ router, pageProps }: AppProps) {

    const t = useTranslations('Footer') 
    const messages = useMessages()
    const { Iqtest } = messages

    return (
        <>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 justify-center items-center" />
                <div className="py-6 w-full">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">{t('our_services')}</h3>
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
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">{t('legal')}</h3>
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
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">{t('about')}</h3>
                            <ul>
                                <li className="mb-4">
                                    <a href="/contact" className="hover:underline">{t('contact_us')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>       
        </>
    )

}
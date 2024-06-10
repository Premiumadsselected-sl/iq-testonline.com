import Link from 'next/link';
import styles from '@/pages/services/iq-testonline/styles/ForgotPasswordStyles.module.css'
import { AppProps } from 'next/app';
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next'

type Props = AppProps & {
    t: any
}

export default function ForgotPasswordForm({ pageProps }: Props) {

    // Para la internalizacion cada pagina debe tener su propio archivo de mensajes
    const t = useTranslations('ForgotPassword') // consulta /messages/[locale].json
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <>

            <form
                // action="/api/auth/callback/credentials"
                method="post"
                // onSubmit={onSubmit}
                id="forgot-password-form"
                className="forgot-password-form"
            >
                <div className="w-full lg:max-w-full lg:flex h-[38vh]">
                    <div className="bg-white p-4 flex flex-col leading-normal rounded-lg w-full border-customBorderGray border-[1px] shadow-md">
                        <div className="grid grid-cols-1 gap-4 md:gap-6" >
                            <span className={styles.titleForm}>{t('forgotTitle')}</span>
                            <div className="w-full col-span-2">
                                <input type="text" id="first_name" className={styles.inputForm} placeholder={t('placeholderEmail')} required />
                            </div>
                            <div className="col-span-2">
                                <button className={styles.buttonForgot}>
                                    <span>{t('forgotButton')}</span>
                                </button>
                            </div>
                            <div className="w-full col-span-2 justify-start">
                                <span className='text-customGray'>{t('questionForgot')} <Link href={'/register'} className='text-blue-600 underline'>{t('registerLink')}</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'ForgotPassword', 
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
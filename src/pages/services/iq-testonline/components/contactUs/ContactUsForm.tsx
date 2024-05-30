import Link from 'next/link';
import styles from './ContactUsStyles.module.css'
import { AppProps } from 'next/app';
import { useTranslations } from 'next-intl';

type Props = AppProps & {
    t: any
}

export default function ContactUsForm({ pageProps }: Props) {

    const t = useTranslations('Contact') 
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <>
            <form
            // action="/api/auth/callback/credentials"
            // method="post"
            // onSubmit={onSubmit}
            >
                <div className="w-full lg:max-w-full lg:flex">
                    <div className="bg-white p-4 flex flex-col leading-normal rounded-l-lg rounded-r-lg lg:rounded-r-none w-full">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6" >
                            
                            <span className={styles.titleForm}>{t('title')}</span>

                            <div className="w-full col-span-2 lg:col-span-1">
                                <input 
                                    type="text" 
                                    className={styles.inputForm} 
                                    placeholder={t('name_holder')} 
                                required />
                            </div>

                            <div className="w-full col-span-2 lg:col-span-1">
                                <input 
                                    type="text" 
                                    className={styles.inputForm} 
                                    placeholder={t('email_holder')} 
                                required />
                            </div>

                            <div className="w-full col-span-2">
                                <input 
                                    type="text" 
                                    className={styles.inputForm} 
                                    placeholder={t('topic_holder')} 
                                required />
                            </div>

                            <div className="w-full col-span-2">
                                <textarea rows={4} className={styles.inputForm} placeholder={t('message_holder')} required ></textarea>
                            </div>

                            <div className="col-span-2">
                                <button className={styles.buttonContactUs}>
                                    <span>{t('contact_button')}</span>
                                </button>
                            </div>

                            <div className="w-full col-span-2">
                                <span className='text-customGray'>{t('text_aviable')} <Link href={'/login'} className='text-blue-600 underline'>{t('contact_email')}</Link></span>
                            </div>

                        </div>
                    </div>
                    <div 
                        className=" lg:w-[50%] flex-none bg-cover rounded-r-lg text-center" 
                        style={{ backgroundImage: 'url(/assets/login/cosmos.jpg)' }} 
                        title="Woman holding a mug">
                    </div>
                </div>
            </form>
        </>
    );
}
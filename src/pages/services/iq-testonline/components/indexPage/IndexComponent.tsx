import { useTranslations } from "next-intl"
import { AppProps } from "next/app"
import Link from "next/link"
import { FaArrowRight, FaCheck } from "react-icons/fa"
import { TbClick } from "react-icons/tb"
import styles from '@/pages/services/iq-testonline/styles/IndexStyles.module.css'
import Image from 'next/image'

type Props = AppProps & {
    t: any
}

export default function IndexComponent({ pageProps }: Props) {
    
    const t = useTranslations('Index') 

    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <>
            <section className={styles.section}>
                <div className={styles.divSection}>
                    <div className="mr-auto place-self-center ">
                        <h1 className={styles.h1}>
                            {t('title')}
                        </h1>
                        <p className={styles.pInitial}>
                            {t('subtitle')}
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 justify-center ml-6 sm:ml-0">
                            <Link href="/app" >
                                <button className={styles.buttonTest}>
                                    {t('button_test')}
                                    <FaArrowRight className="ml-6" />
                                </button>
                            </Link>
                        </div>

                        <ul role="list" className="pt-16 space-y-2 border-t border-gray-200 dark:border-gray-700 ml-[2vw]">
                            <li className="flex space-x-3 items-center">
                                <FaCheck size={25} />
                                <span className="text-base font-bold leading-tight  dark:text-white">9,657</span><span className="leading-tight font-medium ">{t('average_today')}</span>
                            </li>
                            <li className="flex space-x-3 items-center">
                                <TbClick size={30} />
                                <span className="text-base font-bold leading-tight  dark:text-white">102</span><span className="leading-tight font-medium ">{t('average_today')}</span>
                            </li>
                        </ul>

                    </div>
                    <Link href="/app" className="hidden lg:mt-0 lg:flex xl:pl-20 xl:py-24 px-16 items-center">
                        <Image src="/assets/home/IndexImg.png" alt="hero image" width={600} height={307} className="shadow-2xl transition-transform duration-300 transform hover:scale-110 rounded-xl" style={{ boxShadow: "-8px -8px 30px 0px rgb(126 34 206 / 30%), 0 0px 0px -5px rgb(126 34 206 / 35%)" }} />
                    </Link>
                </div>
                <div className="lg:flex gap-4 justify-center lg:justify-start px-10 text-center">
                    <p><span className="text-6xl font-black subjectivy-black">25</span>{t('qty_questions')}</p>
                    <p><span className="text-6xl font-black subjectivy-black">20</span>{t('max_minutes')}</p>
                    <p><span className="text-6xl font-black subjectivy-black">100%</span>{t('precision')}</p>
                </div>
            </section>
        </>
    );
}
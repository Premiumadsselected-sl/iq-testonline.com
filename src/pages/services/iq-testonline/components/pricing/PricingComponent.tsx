import { FaCheck } from "react-icons/fa";
import styles from '@/pages/services/iq-testonline/styles/PrincingStyles.module.css';
import { useTranslations } from "next-intl";
import { AppProps } from "next/app";

type Props = AppProps & {
  t: any
}
export default function PricingComponent({ pageProps }: Props) {

  
  const t = useTranslations('Pricing') 
  pageProps = {
    ...pageProps,
    t: t,
  }

  return (
    <div className="flex flex-col flex-wrap items-center text-center text-customGray">
      <h1 className="text-4xl font-extrabold">{t('packages')}</h1>
      <p className="mb-20">{t('discoverText')}</p>
      <div className="w-full md:w-full lg:w-9/12 xl:w-3/5 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 py-5 px-3">
        <div className="grid grid-cols-2 gap-0">
          <p className="col-span-2 mb-6">{t('practice')}</p>
          <div className="col-span-2 md:col-span-1 mb-6 ">
            <p className="text-6xl text-purple-600 font-extrabold">{t('questionForgot')}<span className="text-sm text-customGray font-normal">/{t('byMonth')}</span></p>
            <p className="text-gray-400">{t('trial')}</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-wrap justify-center md:justify-start mb-2">
            <ul>
              <li className="flex space-x-3 items-center justify-center py-1">
                <FaCheck size={15} />
                <span className="text-base text-start font-bold leading-tight  dark:text-white">{t('performance')}</span>
              </li>
              <li className="flex space-x-3 items-center py-1">
                <FaCheck size={15} />
                <span className="text-base text-balance font-bold leading-tight  dark:text-white">{t('followUp')}</span>
              </li>
              <li className="flex space-x-3 items-center py-1">
                <FaCheck size={15} />
                <span className="text-base text-start font-bold leading-tight  dark:text-white">{t('trainingExams')}</span>
              </li>
              <li className="flex space-x-3 items-center mb-6">
                <FaCheck size={15} />
                <span className="text-base text-center md:text-start font-bold leading-tight  dark:text-white">{t('trainingMaterial')}</span>
              </li>
            </ul>
          </div>
          <div className="col-span-2 pb-5">
            <button className={styles.buttonPricing}>
              <span>{t('buttonText')}</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
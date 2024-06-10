'use client'
import { FaCheck } from "react-icons/fa";
import styles from './PrincingStyles.module.css'
import { useTranslations } from "next-intl";
import { AppProps } from "next/app";
import { GetStaticPropsContext } from 'next'


type Props = AppProps & {
  t: any
}
export default function PricingComponent({ pageProps }: Props) {

  // Para la internalizacion cada pagina debe tener su propio archivo de mensajes
  const t = useTranslations('Pricing') // consulta /messages/[locale].json
  pageProps = {
    ...pageProps,
    t: t,
  }

  return (
    <div className="flex flex-col flex-wrap items-center text-center text-customGray">
      <h1 className="text-4xl font-extrabold mb-6">{t('our_package_text1')} <strong className="text-purple-700">{t('our_package_text2')}</strong></h1>
      <div className="w-10 h-1 bg-violet-700 rounded-full mb-6"></div>

      <p>{t('daily_price')} <strong>{t('monthly_price')}</strong></p>
      <p className="mb-20">{t('package_complete')}</p>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
  const messages = (await import(`/messages/${locale}.json`)).default
  return {
      props: {
          messages: messages,
          translationNamespace: 'Pricing', 
          locale: locale,
          timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
      }
  }
}
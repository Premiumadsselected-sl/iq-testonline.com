'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Header from '@/components/client/Header'
import { AppProps } from "next/app"
import { GetStaticPropsContext } from 'next'

type Props = AppProps & {
    children: React.ReactNode
}

const ErrorPage404 = () => {
  const t = useTranslations('NotFound') 
  return (
    <>
      <Header />
      <div>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </div>
    </>
  )
}

export default ErrorPage404

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
  const messages = (await import(`/messages/${locale}.json`)).default
  return {
      props: {
          messages: messages,
          translationNamespace: 'NotFound', 
          locale: locale,
          timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
      }
  }
}
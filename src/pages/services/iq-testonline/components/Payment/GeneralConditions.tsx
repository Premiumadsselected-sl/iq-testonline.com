import { useTranslations } from 'next-intl';
import { AppProps } from 'next/app';
import { GetStaticPropsContext } from 'next'

type Props = AppProps & {
    children: React.ReactNode
}

export default function GeneralConditions({ router, pageProps }: AppProps) {

    const t = useTranslations('GeneralConditionsPopup')

    pageProps = {
        ...pageProps,
        ...router,
        t: t,
    }


    return (

        <div className="flex flex-col flex-wrap justify-start items-start text-left text-customGray ">
            <h1 className="text-xl md:text-2xl font-extrabold mb-8">{t('title')}</h1>
            <h2 className="text-lg md:text-normal font-normal mb-8">{t('subtitle')}</h2>
            <div className="mb-6 text-normal">
                <ul className="list-decimal ml-6">
                    <li className='mb-4'><strong>{t('title_text1')}</strong>&nbsp;{t('text1')}</li>
                    <li className='mb-4'><strong>{t('title_text2')}</strong>&nbsp;{t('text2')}</li>
                    <li className='mb-4'><strong>{t('title_text3')}</strong>&nbsp;{t('text3')}</li>
                    <li className='mb-4'><strong>{t('title_text4')}</strong>&nbsp;{t('text4')}</li>
                    <li className='mb-4'><strong>{t('title_text5')}</strong>&nbsp;{t('text5')}</li>
                    <li className='mb-4'><strong>{t('title_text6')}</strong>&nbsp;{t('text6')}
                        <ul className="list-disc ml-6 mt-4">
                            <li className='mb-1'><strong>{t('subtitle1_text6')}</strong>&nbsp;{t('subtext1_text6')}</li>
                            <li className='mb-1'><strong>{t('subtitle2_text6')}</strong>&nbsp;{t('subtext2_text6')}</li>
                            <li className='mb-1'><strong>{t('subtitle3_text6')}</strong>&nbsp;{t('subtext3_text6')}</li>
                            <li className='mb-1'><strong>{t('subtitle4_text6')}</strong>&nbsp;{t('subtext4_text6')}</li>
                        </ul>
                    </li>
                    <li className='mb-4'><strong>{t('title_text7')}</strong>&nbsp;{t('text7')}</li>
                    <li className='mb-4'><strong>{t('title_text8')}</strong>&nbsp;{t('text8')}</li>
                </ul>
            </div>
            <p>{t('final_text')}</p>
        </div>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'GeneralConditionsPopup',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
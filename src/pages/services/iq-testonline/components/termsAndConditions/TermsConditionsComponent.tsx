import { useTranslations } from "next-intl"
import { AppProps } from "next/app"
import Link from "next/link"

type Props = AppProps & {
    t: any
}
export default function TermsConditionsComponent({ pageProps }: Props) {

    const t = useTranslations('Terms')
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <div className="flex flex-col flex-wrap justify-start items-start text-left text-customGray">
            <h1 className="text-6xl font-extrabold mb-8">{t('title')}</h1>
            <p className="mb-6">{t('terms')}</p>
            <h3 className="text-3xl font-extrabold">{t('title2')}</h3>
            <Link href="#accounts-and-membership" className="text-blue-600 cursor-pointer">{t('contentLink1')}</Link>
            <Link href="#billing-and-payments" className="text-blue-600 cursor-pointer">{t('contentLink2')}</Link>
            <Link href="#pricing" className="text-blue-600 cursor-pointer">{t('contentLink3')}</Link>
            <Link href="#accuracy-of-information" className="text-blue-600 cursor-pointer">{t('contentLink4')}</Link>
            <Link href="#links-to-other-resources" className="text-blue-600 cursor-pointer">{t('contentLink5')}</Link>
            <Link href="#prohibited-uses" className="text-blue-600 cursor-pointer">{t('contentLink6')}</Link>
            <Link href="#limitation-of-liability" className="text-blue-600 cursor-pointer">{t('contentLink7')}</Link>
            <Link href="#changes-and-amendments" className="text-blue-600 cursor-pointer">{t('contentLink8')}</Link>
            <Link href="#acceptance-of-these-terms" className="text-blue-600 cursor-pointer">{t('contentLink9')}</Link>
            <Link href="#contacting-us" className="text-blue-600 cursor-pointer mb-6">{t('contentLink10')}</Link>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="accounts-and-membership">{t('title3')}</h3>
            <p className="mb-6">{t('accountAndMembershipText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}id="billing-and-payments">{t('title4')}</h3>
            <p className="mb-6">{t('billingAndPaymentsText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}id="pricing">{t('title5')}</h3>
            <p className="mb-6">{t('pricingText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}id="accuracy-of-information">{t('title6')}</h3>
            <p className="mb-6">{t('accuracyText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}id="links-to-other-resources">{t('title7')}</h3>
            <p className="mb-6">{t('resourcesText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}id="prohibited-uses">{t('title8')}</h3>
            <p className="mb-6">{t('prohibitedText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}id="limitation-of-liability">{t('title9')}</h3>
            <p className="mb-6">{t('limitationText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}id="changes-and-amendments">{t('title10')}</h3>
            <p className="mb-6">{t('amendmentsText1')}</p>
            <p className="mb-6">{t('amendmentsText2')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}id="acceptance-of-these-terms">{t('title11')}</h3>
            <p className="mb-6">{t('acceptanceText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }}id="contacting-us">{t('title12')}</h3>
            <p className="mb-6">{t('contactText')}</p>
            <p className="mb-6 text-blue-600">correo@correo.com</p>
            <p className="mb-6">{t('update')}</p>

            <style jsx global>{`html {scroll-behavior: smooth;}`}</style>
        </div>

    );
}
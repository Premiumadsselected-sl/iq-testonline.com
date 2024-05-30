import { useTranslations } from "next-intl"
import { AppProps } from "next/app"
import Link from "next/link"

type Props = AppProps & {
    t: any
}
export default function PrivacyPolicyComponent({ pageProps }: Props) {

    const t = useTranslations('Privacy') 
    pageProps = {
        ...pageProps,
        t: t,
    }

    return (
        <div className="flex flex-col flex-wrap justify-start items-start text-left text-customGray">
            <h1 className="text-6xl font-extrabold mb-8">{t('title')}</h1>
            <p className="mb-6">{t('policy1')}</p>
            <p className="mb-6">{t('policy2')}</p>
            <h3 className="text-3xl font-extrabold">{t('title2')}</h3>
            <Link href="#Automatic-collection-of-information" className="text-blue-600 cursor-pointer">{t('contentLink1')}</Link>
            <Link href="#Collection-of-personal-information" className="text-blue-600 cursor-pointer">{t('contentLink2')}</Link>
            <Link href="#Privacy-of-children" className="text-blue-600 cursor-pointer">{t('contentLink3')}</Link>
            <Link href="#Use-and-processing-of-collected-information" className="text-blue-600 cursor-pointer">{t('contentLink4')}</Link>
            <Link href="#Payment-processing" className="text-blue-600 cursor-pointer">{t('contentLink5')}</Link>
            <Link href="#Managing-information" className="text-blue-600 cursor-pointer">{t('contentLink6')}</Link>
            <Link href="#Disclosure-of-information" className="text-blue-600 cursor-pointer">{t('contentLink7')}</Link>
            <Link href="#Retention-of-information" className="text-blue-600 cursor-pointer">{t('contentLink8')}</Link>
            <Link href="#Transfer-of-information" className="text-blue-600 cursor-pointer">{t('contentLink9')}</Link>
            <Link href="#Data-protection-rights-under-the-GDPR" className="text-blue-600 cursor-pointer">{t('contentLink10')}</Link>
            <Link href="#How-to-exercise-your-rights" className="text-blue-600 cursor-pointer">{t('contentLink11')}</Link>
            <Link href="#Cookies" className="text-blue-600 cursor-pointer">{t('contentLink12')}</Link>
            <Link href="#Do-Not-Track-signals" className="text-blue-600 cursor-pointer">{t('contentLink13')}</Link>
            <Link href="#Links-to-other-resources" className="text-blue-600 cursor-pointer">{t('contentLink14')}</Link>
            <Link href="#Information-security" className="text-blue-600 cursor-pointer">{t('contentLink15')}</Link>
            <Link href="#Data-breach" className="text-blue-600 cursor-pointer">{t('contentLink16')}</Link>
            <Link href="#Changes-and-amendments" className="text-blue-600 cursor-pointer">{t('contentLink17')}</Link>
            <Link href="#Acceptance-of-this-policy" className="text-blue-600 cursor-pointer">{t('contentLink18')}</Link>
            <Link href="#Contacting-us" className="text-blue-600 cursor-pointer mb-6">{t('contentLink19')}</Link>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Automatic-collection-of-information">{t('title3')}</h3>
            <p className="mb-6">{t('collectionInformation1')}</p>
            <p className="mb-6">{t('collectionInformation1')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Collection-of-personal-information">{t('title4')}</h3>
            <p className="mb-6">{t('personalInformation1')}</p>
            <p className="mb-6">{t('personalInformation2')}</p>
            <p>{t('personalInformation3')}</p>
            <p>{t('personalInformation4')}</p>
            <p>{t('personalInformation5')}</p>
            <p className="mb-6">{t('personalInformation6')}</p>
            <p className="mb-6">{t('personalInformation7')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Privacy-of-children">{t('title5')}</h3>
            <p className="mb-6">{t('privacyText1')}</p>
            <p className="mb-6">{t('privacyText2')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Use-and-processing-of-collected-information">{t('title6')}</h3>
            <p className="mb-6">{t('useAndCollectedText1')}</p>
            <p className="mb-6">{t('useAndCollectedText2')}</p>
            <p className="mb-6">{t('useAndCollectedText3')}</p>
            <p className="mb-6">{t('useAndCollectedText4')}</p>
            <p>{t('useAndCollectedText5')}</p>
            <p>{t('useAndCollectedText6')}</p>
            <p className="mb-6">{t('useAndCollectedText7')}</p>
            <p className="mb-6">{t('useAndCollectedText8')}</p>
            <p className="mb-6">{t('useAndCollectedText9')}</p>
            <p>{t('useAndCollectedText10')}</p>
            <p>{t('useAndCollectedText11')}</p>
            <p className="mb-6">{t('useAndCollectedText12')}</p>
            <p className="mb-6">{t('useAndCollectedText13')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Payment-processing">{t('title7')}</h3>
            <p className="mb-6">{t('paymentText1')}</p>
            <p className="mb-6">{t('paymentText2')}</p>
            <p className="mb-6">{t('paymentText3')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Managing-information">{t('title8')}</h3>
            <p className="mb-6">{t('managingText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Disclosure-of-information">{t('title9')}</h3>
            <p className="mb-6">{t('disclosuerText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Retention-of-information">{t('title10')}</h3>
            <p className="mb-6">{t('retentionText1')}</p>
            <p className="mb-6">{t('retentionText2')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Transfer-of-information">{t('title11')}</h3>
            <p className="mb-6">{t('transferText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Data-protection-rights-under-the-GDPR">{t('title12')}</h3>
            <p className="mb-6">{t('dataProtectionText1')}</p>
            <p className="mb-6">{t('dataProtectionText2')}</p>
            <p className="mb-6">{t('dataProtectionText3')}</p>
            <p className="mb-6">{t('dataProtectionText4')}</p>
            <p className="mb-6">{t('dataProtectionText5')}</p>
            <p className="mb-6">{t('dataProtectionText6')}</p>
            <p className="mb-6">{t('dataProtectionText7')}</p>
            <p className="mb-6">{t('dataProtectionText8')}</p>
            <p className="mb-6">{t('dataProtectionText9')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="How-to-exercise-your-rights">{t('title13')}</h3>
            <p className="mb-6">{t('exerciseRightsText1')}</p>
            <p className="mb-6">{t('exerciseRightsText2')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Cookies">{t('title14')}</h3>
            <p className="mb-6">{t('cookiesText1')}</p>
            <p className="mb-6">{t('cookiesText2')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Do-Not-Track-signals">{t('title15')}</h3>
            <p className="mb-6">{t('trackSignalsText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Links-to-other-resources">{t('title16')}</h3>
            <p className="mb-6">{t('linksText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Information-security">{t('title17')}</h3>
            <p className="mb-6">{t('securityText1')}</p>
            <p className="mb-6">{t('securityText2')}</p>
            <p className="mb-6">{t('securityText3')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Data-breach">{t('title18')}</h3>
            <p className="mb-6">{t('dataBreachText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Changes-and-amendments">{t('title19')}</h3>
            <p className="mb-6">{t('amendmentsText1')}</p>
            <p className="mb-6">{t('amendmentsText2')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Acceptance-of-this-policy">{t('title20')}</h3>
            <p className="mb-6">{t('acceptanceText')}</p>
            <h3 className="text-3xl font-extrabold mb-6" style={{ scrollMarginTop: '80px' }} id="Acceptance-of-this-policy">{t('title21')}</h3>
            <p className="mb-6">{t('contactngText1')}</p>
            <p className="mb-6 text-blue-600 cursor-pointer">{t('contactngText2')}</p>
            <p className="mb-6">{t('contactngText3')}</p>
            <p className="mb-6">{t('updatePagePrivacyPolicy')}</p>


            <style jsx global>{`html {scroll-behavior: smooth;}`}</style>
        </div>

    );
}
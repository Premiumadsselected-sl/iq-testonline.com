import {locales} from '@/navigation'
import { useTranslations, useLocale } from 'next-intl'
import Switcher from '@/components/client/LocaleSwitcher/Switcher'
import {MessageKeys} from 'next-intl'

const LocaleSwitcher = () => {
  
    const currentLocale = useLocale()
    const t = useTranslations('LocaleSwitcher')

    const translations: any = {}  
    locales.map((locale: MessageKeys<any, any>) => { 
        return translations[locale] = t(locale)
    })
    
    return <Switcher props={{currentLocale, locales, translations }} />

}

export default LocaleSwitcher
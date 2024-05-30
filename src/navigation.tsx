import {createSharedPathnamesNavigation} from 'next-intl/navigation'

export const locales = ['es', 'it', 'fr', 'de', 'ie', 'ae', 'uk', 'nl'] as const
export const {Link, redirect, usePathname, useRouter} 
= createSharedPathnamesNavigation({locales})
'use client'
import {signIn, signOut, useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import { useTranslations } from 'next-intl'
import styles from '@/pages/services/iq-testonline/styles/Menu.module.css'
import Link from 'next/link'


const DeskTopMenu = () => {

    const {data: session, status} = useSession()
    const t = useTranslations('Menu')
    const router = useRouter()
    
    if (status === 'loading') return (<>
        <section className="hidden lg:flex md:hidden sm:hidden justify-between w-3/5" id="menu-desktop">
            <div className="flex w-full justify-end py-4">
                <p>{t('weating-locale')}</p>
            </div>
        </section>
    </>)

    return (<>
        
        <section className="hidden lg:flex md:hidden sm:hidden justify-between w-3/5" id="menu-desktop">
            <div className="flex w-full justify-end py-4">
                
            { session ?  <Link href="/profile" className={`min-w-40 mx-4 menu-link ${styles.menuLink} menu-profile-link`}>{t('profile')}
            </Link> : 
                (<> { process.env.NEXT_PUBLIC_CUSTOMIZE_FORMS === 'false' ? 
                    <>
                        <Link href="/register" className={`min-w-40 mx-4 menu-link ${styles.menuLink} menu-register-link`}>{t('register')}</Link>  
                        <Link href="/login" className={`min-w-40 mx-4 menu-link ${styles.menuLink} menu-login-link`}>{t('login')}</Link>
                        <Link href="/contact" className={`min-w-40 mx-4 menu-link ${styles.menuLink} menu-contact-link`}>{t('contact')}</Link>
                    </>
                    : 
                    <>
                        
                        <button className={`min-w-40 mx-4 menu-link ${styles.menuLink} menu-register-link`} onClick={()=>signIn('Register')}>{t('register')}</button>
                        <button className={`min-w-40 mx-4 ${styles.menuLink} menu-link menu-contact-link`} onClick={()=>{
                            
                            if( process.env.NEXT_PUBLIC_CONTACT_FORM_IN_HOME === 'false' )
                                router.push('/contact')

                            else return router.push('/#contact')

                        }}>{t('contact')}</button>

                    </>
                
                 } </>)}

                 { session ? <button className={`min-w-40 mx-4 menu-link ${styles.menuLink} menu-logout-link`} onClick={()=>signOut()}>{t('logout')}</button> : null }

            </div>
        </section>

    </>)
}

export default DeskTopMenu
'use client'
import {useState} from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx"
import { TfiClose } from "react-icons/tfi"
import { useTranslations } from 'next-intl'
import { signIn, signOut, useSession } from 'next-auth/react'
import {useRouter} from 'next/navigation'
import styles from '@/pages/services/iq-testonline/styles/Menu.module.css'

const ResponsiveMenu = () => {

    const [isWrapperVisible, setIsWrapperVisible] = useState(false)
    
    const handleClick = () =>
    setIsWrapperVisible(!isWrapperVisible)

    const {data: session, status} = useSession()
    const t = useTranslations('Menu')
    const router = useRouter()

    function signUp(): void {
        throw new Error('Function not implemented.')
    }

    return (
        <section className="flex lg:hidden w-14 menu-responsive" id="menu-responsive">
            <div className="flex z-20 menu-responsive-close-wrapper">
                <button className="menu-responsive-close-button" onClick={handleClick}>
                    {isWrapperVisible ? <TfiClose className='text-5xl' />
                    : <RxHamburgerMenu className='text-5xl' />}
                </button>
            </div>
            {isWrapperVisible ? 
            <div className="flex flex-col w-full h-screen bg-white z-10 fixed my-16 inset-x-0">
                <div className="flex flex-col items-center justify-start w-full h-screen bg-white z-10 absolute">
                
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
            </div>
            : null
            }
        </section>
    )
}

export default ResponsiveMenu
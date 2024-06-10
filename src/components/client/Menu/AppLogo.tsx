'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const AppLogo = () => {


    const locale = useLocale()

    return (
        <section className="flex app-logo" id='app-logo'>
            <div className="flex p-1 flex-col items-center w-48 justify-center">
                <Link 
                    href={locale} 
                    className='underline-none'
                >
                    <Image 
                        src={process.env.NEXT_PUBLIC_APP_LOGO as string}
                        alt="logo" 
                        width={512} 
                        height={76} 
                        priority={true}
                        // layout="responsive" 
                        id="img-logo"
                        className='img-logo'
                    />
                    {process.env.NEXT_PUBLIC_APP_WITH_SLOGAN === 'true' ?
                        <small className="font-bold">
                            {process.env.NEXT_PUBLIC_APP_SLOGAN}
                        </small> : null
                    }
                </Link>
            </div>
        </section>
    )

}

export default AppLogo
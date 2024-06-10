'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Switcher = ({ props }: { props: any }) => {

    const {currentLocale, locales, translations} = props
    const [isWrapperVisible, setIsWrapperVisible] = useState(false)
    const flags_path = process.env.NEXT_PUBLIC_APP_LOCALE_FLAGS_PATH
   
    const handleClick = () => 
    setIsWrapperVisible( !isWrapperVisible )
    
    return (<>

        <section className="flex flex-col justify-center p-1 w-14" id="locale-switcher">
            <button onClick={handleClick}>
                <Image 
                    src={`${flags_path}${currentLocale}.svg`}
                    alt={currentLocale} 
                    width={100} 
                    height={100} 
                    className='rounded shadow-md shadow-black'
                /> 
                {/* {translations[currentLocale]}  */}
            </button>
            { isWrapperVisible ?
                <div className="flex flex-col w-20 my-6 py-4 z-20 top-4 p-2 mt-16 rounded absolute text-center shadow-sm bg-white locale-wrapper">
                    {locales.map((locale: string) => (
                        ( locale !== currentLocale ) &&  
                        <Link key={locale} href={locale} locale={locale} className='my-2 text-xs text-black' > 
                            <Image 
                                src={`${flags_path}${locale}.svg`}
                                alt={locale} 
                                width={100} 
                                height={100}
                                className='rounded shadow-md shadow-black mb-1'
                            /> {translations[locale]}
                        </Link>
                    ))}
                </div> : null
            }
        </section>

    </> )

}

export default Switcher
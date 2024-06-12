'use client'
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import { GetStaticPropsContext } from 'next'
import { AppProps } from 'next/app'
import styles from '@/pages/services/iq-testonline/styles/IqTestStyles.module.css';

type Props = AppProps & {
    children: React.ReactNode
}

interface BooleanState {
    bool: boolean;
    text: string;
}

//TODO: agregar internacionalización

export default function AnalyzeTest() {

    const router = useRouter()
    const [percentage, setPercentage] = useState(0);
    const [blink, setBlink] = useState(false);
    const [booleans, setBooleans] = useState<BooleanState[]>([
        { bool: false, text: "Intuición geométrica" },
        { bool: false, text: "Conceptualización" },
        { bool: false, text: "Visualización mental" },
        { bool: false, text: "Análisis secuencial" },
        { bool: false, text: "Fluidez cognitiva" }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const randomIncrement = Math.floor(Math.random() * 10) + 1;
                const newPercentage = prev + randomIncrement > 100 ? 100 : prev + randomIncrement;

                setBlink(true);
                setTimeout(() => setBlink(false), 500);

                setBooleans((prevBooleans: BooleanState[]) => {
                    const updatedBooleans: BooleanState[] = prevBooleans.map((item, idx) => {
                        const index = Math.floor((newPercentage / 100) * prevBooleans.length); 
                        if (idx < index) {
                            return { ...item, bool: true }; 
                        } else {
                            return { ...item, bool: false };
                        }
                    });
                    return updatedBooleans;
                });


                return newPercentage;
            });
        }, 600);

        return () => clearInterval(interval);
    }, []);




    useEffect(() => {
        if (percentage === 100) router.push('/payment');
    }, [percentage])

    return (
        <>
            <div className="h-auto xl:px-24 2xl:px-56">
                <div className="bg-white p-4 flex flex-col leading-normal rounded-lg w-full border-customBorderGray border-[1px] shadow-md">
                    <div className="grid grid-cols-1 gap-8 md:gap-8">
                        <div className="relative flex items-center justify-center w-36 h-36 md:w-36 md:h-36 justify-self-center text-[#7e22ce]">
                            <span className="loading loading-ring w-full h-full"></span>
                            <span className={`absolute text-base md:text-xl font-semibold text-customGray ${blink ? styles.blink : ''}`}>
                                {percentage}%
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="text-customGray text-sm md:text-normal lg:text-normal xl:text-xl">
                                La evaluación de su prueba está en curso
                                <progress className="progress  w-full justify-self-center" style={{ '--progress-color': '#7e22ce' } as React.CSSProperties} ></progress>
                            </span>

                        </div>
                    </div>


                    <hr className="col-span-2 rounded-3xl my-5" style={{ height: ".5px", backgroundColor: "#c7c7c7" }} />

                    <div className="w-full lg:max-w-full lg:flex ">
                        <div className="bg-[#7e22ce] p-4 flex flex-col leading-normal rounded-lg w-full border-customBorderGray border-[1px] shadow-md">
                            <span className="text-xl md:text-normal lg:text-xl xl:text-2xl leading-none tracking-tight text-white mb-6" >Desglose de categorías</span>

                            {booleans?.map((element, index) => (
                                element.bool ?

                                    <div key={index} className="grid md:h-8 bg-primary-color rounded-box place-items-center">
                                        <div className="grid grid-cols-6 gap-4 text-white mx-2">
                                            <div className="col-start-1 ">
                                                <div className="checkbox-container ">
                                                    <input type="checkbox" defaultChecked className="checkbox checkbox-xs border-[#7e22ce] checked:white [--chkbg:white] [--chkfg:#7e22ce]" />
                                                </div>
                                            </div>
                                            <div className="col-start-2 col-end-7 text-start">
                                                <h4 className="text-white font-normal text-start">{element.text}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div key={index} className="grid md:h-8 bg-primary-color rounded-box place-items-center">
                                        <div className="grid grid-cols-6 gap-4 text-white mx-2">
                                            <div className="col-start-1   text-secondary-color">
                                                <div className="checkbox-container ">
                                                    <input type="checkbox" defaultChecked disabled className="checkbox checkbox-xs border-[#7e22ce] checked:white [--chkbg:white] [--chkfg:#7e22ce]" />
                                                </div>
                                            </div>
                                            <div className="col-start-2 col-end-7 text-start">
                                                <h4 className="text-gray-200 font-extralight text-start">{element.text}</h4>
                                            </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Index',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}






'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { GetStaticPropsContext } from 'next'
import { AppProps } from 'next/app'
import { useTranslations } from "next-intl";

//Style
import styles from '@/pages/services/iq-testonline/styles/IqTestStyles.module.css';
import Fade from "../transitions/Fade";

type Props = AppProps & {
    children: React.ReactNode
}

interface BooleanState {
    bool: boolean;
    text: string;
}

export default function AnalyzeTraining({ pageProps }: Props) {
    
    const t = useTranslations('Preview')

    pageProps = {
        ...pageProps,
        t: t,
    }

    const [showFade, setShowFade] = useState(false);
    const router = useRouter()
    const [percentage, setPercentage] = useState(0);
    const [blink, setBlink] = useState(false);
    const [booleans, setBooleans] = useState<BooleanState[]>([
        { bool: false, text: t('geometric_intuition') },
        { bool: false, text: t('conceptualization') },
        { bool: false, text: t('mental_visualization') },
        { bool: false, text: t('sequential_analysis') },
        { bool: false, text: t('cognitive_fluency') }
    ]);

    useEffect(() => {
        setShowFade(true);
    }, []);

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
        }, 250);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (percentage === 100) router.push('/training');
    }, [percentage])

    return (
        <>
            <Fade in={showFade}>
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
                                    {t('trainig_in_progress')}
                                    <progress className="progress  w-full justify-self-center" style={{ '--progress-color': '#7e22ce' } as React.CSSProperties} ></progress>
                                </span>

                            </div>
                        </div>
                    </div>
                </div >
            </Fade>
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






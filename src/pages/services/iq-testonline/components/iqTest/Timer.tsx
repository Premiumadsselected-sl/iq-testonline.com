'use client'
import { useContext, useEffect, useState } from "react";
import { MdTimer } from "react-icons/md";
import styles from '@/pages/services/iq-testonline/styles/IqTestStyles.module.css';
import CGlobal from "@/contexts/global/CGlobal";
import { useSelector } from "react-redux";
import { GetStaticPropsContext } from 'next'
import { AppProps } from "next/app";

type Props = AppProps & {
    t: any
    pageProps: AppProps
}

const Timer: React.FC = () => {
    const totalTime = 20 * 60; // 20 minutes
    const [timeLeft, setTimeLeft] = useState<number>(totalTime);
    const [isRunning] = useState<boolean>(true);
    const [gridTemplateColumns, setGridTemplateColumns] = useState<string>('87% auto');

    // Get the context Redux
    const { progressTestPage } = useSelector((state: any) => state.iqTestStore)

    const Context = useContext(CGlobal)
    const { o }: any = Context

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);
        } else if (!isRunning && timeLeft !== 0) {
            if (interval) clearInterval(interval);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, timeLeft]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setGridTemplateColumns('89% auto');
            } else {
                setGridTemplateColumns('70% auto');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const progressBarWidth = (timeLeft / totalTime) * 100;

    return (
        <>
            {progressTestPage !== 100 &&
                <div className="grid grid-cols-4 gap-0 items-center" style={{ gridTemplateColumns: gridTemplateColumns, gridAutoFlow: 'column' }}>
                    <div className={styles.timerProgressBar}>
                        <div className={styles.timerBar}
                            style={{ width: `${progressTestPage}%` }}
                        ></div>
                    </div>
                    <div className={styles.percentNumber}>{`${progressTestPage}%`}</div>
                    <div className={styles.currentTime}>{`${formatTime(timeLeft)} `}</div>
                    <MdTimer className="mb-3 tex-sm sm:text-lg" />
                </div>
            }
        </>
    );
};

export default Timer;

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

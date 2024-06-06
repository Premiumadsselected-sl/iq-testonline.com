'use client'
import { IoMdArrowBack, IoMdArrowRoundForward } from "react-icons/io"
import styles from '@/pages/services/iq-testonline/styles/IqTestStyles.module.css'
import { useTranslations } from "next-intl"
import { AppProps } from "next/app"
import Question from "./Question"
import Answer from "./Answer"
import { useEffect, useState } from "react"

// Import ServicesAsyncRequest utility, auth from firebase and resolve from url
import ServicesAsyncRequest from '@/utils/ServicesAsyncRequest'
// import { auth } from '@/configs/firebase/config'
import { resolve } from 'url'

//Context
import { useDispatch, useSelector } from "react-redux"
import { progressTest } from '@/contexts/redux/iqTestSlice'
import AnalyzeTest from "./AnalyzeTest"

type Props = AppProps & {
    t: any
    pageProps: AppProps
}

export default function TestSection({ pageProps }: Props) {

    const t = useTranslations('Test');
    const [page, setPage] = useState<number>(1);
    const [answers, setAnswers] = useState<{ [key: string]: { [key: string]: boolean } }>({});
    const [arrPictures] = useState<Array<string>>(['a', 'b', 'c', 'd', 'e', 'f',]);
    const progressBar = new Array(20).fill(0);

    // Use the context Redux
    const dispatch = useDispatch()
    const { progressTestPage } = useSelector((state: any) => state.iqTestStore)

    useEffect(() => {
        dispatch(progressTest(0))
    }, [])

    pageProps = {
        ...pageProps,
        t: t,
    }

    const next = (): void => {
        if (page < 20) setPage(page + 1)
    }

    const back = (): void => {
        if (page > 1) setPage(page - 1)
    }

    const answerSelected = (value: string): void => {
        setAnswers((prevAnswers) => {
            const updatedAnswers = { ...prevAnswers };
            const pageKey = `${page}`;

            updatedAnswers[pageKey] = {};
            updatedAnswers[pageKey][value] = true;

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            validateFinishTest(updatedAnswers)
            dispatch(progressTest(Object.keys(updatedAnswers).length))

            return updatedAnswers;
        });
        next();

    };

    const validateFinishTest = async (updatedAnswers: { [key: string]: { [key: string]: boolean } }) => {
        if (Object.keys(updatedAnswers).length === 20) {

            // Get the response from the server
            // const user = auth.currentUser
            // const token = await user?.getIdToken()
            // const req = await ServicesAsyncRequest({
            //     method: 'POST', path: '/api/auth-subscription',
            //     body: JSON.stringify({
            //         token: token,
            //         user: user,
            //         data: updatedAnswers
            //     })
            // })

            // Resolve the response
            // const res = await req.json()
            // return resolve(process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string, res.url)

        }
    }

    return (
        <>
            {progressTestPage !== 100 ?

                <div className="grid grid-rows-1 gap-10">
                    <div className="flex justify-between items-center">
                        <button className={styles.button} onClick={back}>
                            <IoMdArrowBack className="mt-0.5 mr-1" />
                            <span >{t('preview')}</span>
                        </button>
                        <span className="text-customGray">{`${page}/20`}</span>
                        <button className={styles.button} onClick={next}>
                            <span >{t('next')}</span>
                            <IoMdArrowRoundForward className="mt-0.5 ml-1" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  items-center">
                        <Question page={page} />
                        <div className="grid grid-cols-3 gap-4">
                            {arrPictures.map((picture, i) => (
                                <button key={page + i} className={answers[`${page}`]?.[`${picture}`] ? styles.buttonAnswerSelected : styles.buttonAnswer} onClick={() => answerSelected(picture)}>
                                    <Answer page={page} picture={picture} />
                                </button>

                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap w-full items-center" >
                        {progressBar.map((_, i) => (
                            <div
                                key={i}
                                className={`${styles.progressIndicator} ${(typeof answers[i + 1] !== 'undefined' && i + 1 !== page) ? 'bg-[#2e7d32] text-white' : (page === i + 1 ? 'bg-purple-700 text-white' : 'bg-white border text-customGray')}`}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div >
                </div>

                :

                <div className="grid grid-rows-1 gap-4">
                    <AnalyzeTest />
                </div>

            }

        </>
    );
}
'use client'
import { useTranslations } from "next-intl"
import { AppProps } from "next/app"
import { GetStaticPropsContext } from 'next'
import { useEffect, useState } from "react"

//Context
import { useDispatch, useSelector } from "react-redux"
import { progressTest } from '@/contexts/redux/timerSlice'

//Components
import Question from "./Question"
import Answer from "./Answer"
import { IoMdArrowBack, IoMdArrowRoundForward } from "react-icons/io"
import AnalyzeTraining from "./AnalyzeTraining"

//Styles
import styles from '@/pages/services/iq-testonline/styles/IqTestStyles.module.css'


type Props = AppProps & {
    children: React.ReactNode
}

export default function TrainingSection({ pageProps }: Props) {

    const t = useTranslations('Test');

    // Use the context Redux
    const dispatch = useDispatch()
    const { progressTimerPage, totalQuestions } = useSelector((state: any) => state.timerStore)

    const [page, setPage] = useState<number>(1);
    const [answers, setAnswers] = useState<{ [key: string]: { [key: string]: boolean } }>({});
    const [arrPictures] = useState<Array<string>>(['a', 'b', 'c', 'd', 'e',]);
    const [correctAnswer] = useState<Array<string>>(['b', 'e', 'd', 'c', 'd', 'a', 'c', 'd', 'a', 'c',]);
    const progressBar = new Array(totalQuestions).fill(0);

    useEffect(() => {
        dispatch(progressTest({ currentProgress: 0, totalQuestions: 10 }));
    }, [])

    pageProps = {
        ...pageProps,
        t: t,
    }

    const next = (): void => {
        const answersObj = { ...answers }
        const nextPage = page + 1;

        if (answersObj[nextPage]) {
            const nextMissingPage = findNextMissingKey(answersObj);
            setPage(nextMissingPage);
        } else if (page < totalQuestions) {
            setPage(nextPage);
        } else {
            const nextMissingPage = findNextMissingKey(answersObj);
            setPage(nextMissingPage);
        }
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
            dispatch(progressTest({ currentProgress: Object.keys(updatedAnswers).length, totalQuestions: 10 }));


            return updatedAnswers;
        });
        // next();

    };

    const findNextMissingKey = (obj: { [key: string]: { [key: string]: boolean } }) => {
        const keysArray = Object.keys(obj).map(Number).sort((a, b) => a - b);

        for (let i = 0; i < keysArray.length; i++) {
            if (keysArray[i] !== i + 1) {
                return i + 1;
            }
        }

        return keysArray.length + 1;
    }

    const validateFinishTest = async (updatedAnswers: { [key: string]: { [key: string]: boolean } }) => {

        if (Object.keys(updatedAnswers).length === 10) {

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

            return true
        }

        return false
    }

    return (
        <>
            {progressTimerPage !== 100 ?

                <div className="grid grid-rows-1 gap-5">
                    <div className="flex justify-between items-center">
                        <button className={styles.button} onClick={back}>
                            <IoMdArrowBack className="mt-0.5 mr-1" />
                            <span className="text-sm">{t('preview')}</span>
                        </button>
                        <span className="text-customGray text-sm">{`${page}/${totalQuestions}`}</span>
                        <button className={styles.button} onClick={next}>
                            <span className="text-sm">{t('next')}</span>
                            <IoMdArrowRoundForward className="mt-0.5 ml-1" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-0">
                        <Question page={page} />
                        <div className="grid grid-cols-3 gap-4">
                            {arrPictures.map((picture, i) => (
                                <button
                                    key={page + i}
                                    className={`${(answers[`${page}`]?.[`${picture}`] ? styles.buttonAnswerSelected : styles.buttonAnswer)} ${(answers[`${page}`] && correctAnswer[page] === picture) && `border-[3px] border-green-600 rounded-lg hover:border-[3px] hover:border-green-600`}`}
                                    onClick={() => answerSelected(picture)}
                                >
                                    <Answer page={page} picture={picture} />
                                </button>

                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap w-full items-center text-xl" >
                        {progressBar.map((_, i) => (
                            <div
                                key={i}
                                className={` ${styles.progressIndicator} ${(typeof answers[i + 1] !== 'undefined' && i + 1 !== page) ? 'bg-[#2e7d32] text-white' : (page === i + 1 ? 'bg-purple-700 text-white' : 'bg-white border text-customGray')}`}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div >
                </div>
                :

                <div className="grid grid-rows-1 gap-4">
                    <AnalyzeTraining {...pageProps} />
                </div>

            }
        </>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default
    return {
        props: {
            messages: messages,
            translationNamespace: 'Test',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'
        }
    }
}
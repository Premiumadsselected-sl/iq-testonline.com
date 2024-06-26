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
import AnalyzeTest from "./AnalyzeTest"
import { IoMdArrowBack, IoMdArrowRoundForward } from "react-icons/io"

//Styles
import styles from '@/pages/services/iq-testonline/styles/IqTestStyles.module.css'


type Props = AppProps & {
    children: React.ReactNode
}

export default function TestSection({ pageProps }: Props) {

    const t = useTranslations('Test');

    // Use the context Redux
    const dispatch = useDispatch()
    const { progressTimerPage, totalQuestions } = useSelector((state: any) => state.timerStore)
    
    const [page, setPage] = useState<number>(1);
    const [answers, setAnswers] = useState<{ [key: string]: { [key: string]: boolean } }>({});
    const [arrPictures] = useState<Array<string>>(['a', 'b', 'c', 'd', 'e', 'f',]);
    const progressBar = new Array(totalQuestions).fill(0);


    useEffect(() => {
        dispatch(progressTest({ currentProgress: 0, totalQuestions: 20 }));
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
            dispatch(progressTest({ currentProgress: Object.keys(updatedAnswers).length, totalQuestions: 20 }));


            return updatedAnswers;
        });
        next();

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

        if (Object.keys(updatedAnswers).length === 20) {

            // Aqui analizamos las respuestas
            // y actualizamos user_data 
            // usa -> PATH : auth/update-user-data
            // para que luego puedas usar estos datos 
            // en la pagina de resultados, no creo que tengas 
            // la necesidad de ir haciendo peticiones al servidor 
            // para ir guardando o actualizando user_data con cada 
            // pregunta o interaccion , en el test primero recopilas 
            // todas las respuestas y al final actalizas user_data, 
            // en el caso de training usa la misma mecanica intenta no hacer 
            // peticiones al servidor por cada interaccion, recopila todas las
            // interacciones y al final actualiza user_data.
            // saviendo que user_data es un objeto que se guarda en la bd
            // y que necesitas traerlo en cada pagina para poder usarlo y actualizarlo
            // talvez podria hacer un hook personalizado en el servicio 👀
            // que se encargue de traer user_data y actualizarlo , dejo esto a tu eleccion
            // por que se lo podriamos añadir al marco mas adelante cuando tengamos mas
            // servicios que lo necesiten y seria una funcionalidad comun a todos los servicios

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0  items-center justify-center">
                        <Question page={page} />
                        <div className="grid grid-cols-3 gap-4">
                            {arrPictures.map((picture, i) => (
                                <button key={page + i} className={answers[`${page}`]?.[`${picture}`] ? styles.buttonAnswerSelected : styles.buttonAnswer} onClick={() => answerSelected(picture)}>
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
                    <AnalyzeTest {...pageProps} />
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
import { useTranslations } from "next-intl";
import { AppProps } from "next/app";
import { GetStaticPropsContext } from 'next';
import { useEffect, useState } from "react";

// Import ServicesAsyncRequest utility, auth from firebase and resolve from url
// import ServicesAsyncRequest from '@/utils/ServicesAsyncRequest';
// import { auth } from '@/configs/firebase/config'
import { resolve } from 'url';

// Context
import { useDispatch, useSelector } from "react-redux";
import { progressTest } from '@/contexts/redux/timerSlice';

// Components
import { IoMdArrowBack, IoMdArrowRoundForward } from "react-icons/io";
import AnalyzeTraining from "./AnalyzeTraining";

// Styles
import styles from '@/pages/services/iq-testonline/styles/IqTestStyles.module.css';

type Props = AppProps & {
    children: React.ReactNode;
};

interface CheckboxGroupProps {
    options: { answer: string[] }[];
    page: number;
}

const questions = [
    { question: "¿Cuál es la siguiente pregunta?", text: "A, C, E, G, ..." },
    { question: "¿Cuál es el siguiente número en la serie?", text: "5, 10, 15, 20, ..." },
    { question: "Seleccione el animal más ligero", text: "" },
    { question: "¿Cuál es la imagen en el espejo para la palabra LAP?", text: "" },
    { question: "¿Cuál es el opuesto de \"Abierto\"?", text: "" },
    { question: "¿Cuál es el mínimo común múltiplo (MCM) de 12 y 18?", text: "" },
    { question: "Contempla la analogía", text: "Madera es un bosque como agua es un..." },
    { question: "¿Cuál es la siguiente letra en la serie?", text: "D, F, H, J, ..." },
    { question: "Encuentra el intruso:", text: "" },
    { question: "Completa la analogía:", text: "Pantalla es un televisor como teclado es un..." },
    { question: "¿Qué número reemplaza la \"?\":", text: "1, 4, 9, 16, 25, ?" },
    { question: "¿Cuál es la siguiente forma de la serie?", text: "Círculo, cuadrado, triángulo, círculo, cuadrado, ..." },
    { question: "¿Qué letra reemplaza la \"?\":", text: "A, D, G, J, M, ?" },
    { question: "¿Qué número reemplaza la \"?\":", text: "5, 7, 11, 17, ?" },
    { question: "¿Qué letra reemplaza la \"?\":", text: "D, G, K, O, ?" },
    { question: "Completa la serie:", text: "55, 49, 43, 37, ..." },
    { question: "Encuentra el intruso:", text: "" },
    { question: "¿Qué número reemplaza la \"?\":", text: "1, 8, 27, 64, 125, ?" },
    { question: "Completa la analogía:", text: "Pies es un zapato como manos es un ..." },
    { question: "Encuentra el intruso:", text: "" },
]

const options = [
    { answer: ["I", "J", "K"] },
    { answer: ["25", "30", "35"] },
    { answer: ["Elefante", "Caballo", "Ratón"] },
    { answer: ["PAL", "LAP", "LPA"] },
    { answer: ["Cerrado", "Roto", "Pequeño"] },
    { answer: ["48", "36", "45"] },
    { answer: ["Río", "Lluvia", "Botella"] },
    { answer: ["K", "L", "N"] },
    { answer: ["56", "62", "49", "35"] },
    { answer: ["Ratón", "Ordenador", "Mesa"] },
    { answer: ["34", "36", "40"] },
    { answer: ["Triángulo", "Circulo"] },
    { answer: ["P", "Q", "R"] },
    { answer: ["23", "24", "25"] },
    { answer: ["S", "T", "U"] },
    { answer: ["33", "31", "29"] },
    { answer: ["FJ", "QT", "GM", "KP"] },
    { answer: ["172", "196", "216"] },
    { answer: ["Guantes", "Calcetines", "Corbata"] },
    { answer: ["121", "150", "196", "289"] }
]

export default function TestSection({ pageProps }: Props) {
    const t = useTranslations('Test');

    pageProps = {
        ...pageProps,
        t: t,
    };

    const initializeCheckedItems = () => {
        const initialState: { [key: number]: { [key: string]: boolean } } = {};
        options.forEach((option, index) => {
            initialState[index + 1] = option.answer.reduce((acc, element) => {
                acc[element] = false;
                return acc;
            }, {} as { [key: string]: boolean });
        });
        return initialState;
    };

    // Use the context Redux
    const dispatch = useDispatch();
    const { progressTimerPage, totalQuestions } = useSelector((state: any) => state.timerStore);
    const [page, setPage] = useState<number>(1);
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: { [key: string]: boolean } }>(
        initializeCheckedItems()
    );
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const progressBar = new Array(totalQuestions).fill(0);

    useEffect(() => {
        dispatch(progressTest({ currentProgress: 0, totalQuestions: 20 }));
    }, []);

    const next = (): void => {
        const answersObj = { ...answers };
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
    };

    const back = (): void => {
        if (page > 1) setPage(page - 1);
    };

    const handleCheckboxChange = (element: string) => {
        const newCheckedItems = Object.keys(checkedItems[page]).reduce((acc, key) => {
            acc[key] = key === element;
            return acc;
        }, {} as { [key: string]: boolean });

        setCheckedItems({
            ...checkedItems,
            [page]: newCheckedItems
        });
        answerSelected(element);
    };

    const answerSelected = (value: string): void => {
        setAnswers((prevAnswers) => {
            const updatedAnswers = { ...prevAnswers };
            const pageKey = page; // page es un número, así que no es necesario convertirlo a cadena

            updatedAnswers[pageKey] = value;

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            validateFinishTest(updatedAnswers);
            dispatch(progressTest({ currentProgress: Object.keys(updatedAnswers).length, totalQuestions: 20 }));

            console.log(updatedAnswers);
            return updatedAnswers;
        });
        // next();
    };

    const findNextMissingKey = (obj: { [key: number]: string }) => {
        const keysArray = Object.keys(obj).map(Number).sort((a, b) => a - b);

        for (let i = 0; i < keysArray.length; i++) {
            if (keysArray[i] !== i + 1) {
                return i + 1;
            }
        }
        return keysArray.length + 1;
    };

    const validateFinishTest = async (updatedAnswers: { [key: number]: string }) => {
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

            return true;
        }
        return false;
    };

    return (
        <>
            {progressTimerPage !== 100 ? (
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
                    <div className="grid grid-cols-1 justify-start items-start text-start gap-5 px-4 py-10">
                        <p className="text-customGray text-2xl font-bold">{questions[page - 1].question}</p>
                        <p>{questions[page - 1].text}</p>

                        {options[page - 1].answer.map(element => (
                            <div className="flex items-center gap-2" key={element}>
                                <input
                                    type="checkbox"
                                    checked={checkedItems[page][element]}
                                    className="checkbox checkbox-xs border-[#7e22ce] [--chkbg:theme(colors.purple.700)] [--chkfg:white] checked:border-white"
                                    onChange={() => handleCheckboxChange(element)}
                                />
                                {element}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap w-full items-center text-xl">
                        {progressBar.map((_, i) => (
                            <div
                                key={i}
                                className={` ${styles.progressIndicator} ${(typeof answers[i + 1] !== 'undefined' && i + 1 !== page) ? 'bg-[#2e7d32] text-white' : (page === i + 1 ? 'bg-purple-700 text-white' : 'bg-white border text-customGray')}`}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="grid grid-rows-1 gap-4">
                    <AnalyzeTraining {...pageProps} />
                </div>
            )}
        </>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    const messages = (await import(`/messages/${locale}.json`)).default;
    return {
        props: {
            messages: messages,
            translationNamespace: 'Test',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE || 'UTC',
        },
    };
}

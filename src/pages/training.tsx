import { AppProps } from 'next/app'
import { GetStaticPropsContext } from 'next'
import PWrapper from '@/pages/providers/client/PWrapper'

// Import the context hooks
import { useSelector, useDispatch } from 'react-redux'

//Icons
import { TbBrain } from 'react-icons/tb'
import { LiaDumbbellSolid } from 'react-icons/lia'

// Import the components
import CardTestTraining from './services/iq-testonline/components/training/CardTestTraining'
import ChartArea from './services/iq-testonline/components/training/ChartArea'


type Props = AppProps & {
    children: React.ReactNode
}

export default function Training({ Component, router, pageProps }: Props) {

    //Arreglo de ejemplo para el uso del componente CardTestTraining
    const objCard = [
        {
            "cardHeader": "Entrenamiento",
            "cardBody": "Box Clever Test",
            "icon": <LiaDumbbellSolid size={25} />,
            "cardFooter": "8/10 respuestas",
            "cardFooter2": "la última vez"
        },
        {
            "cardHeader": "Exámen",
            "cardBody": "Test IQ formas",
            "icon": <TbBrain size={25} />,
            "cardFooter": "8/10 respuestas",
            "cardFooter2": "la última vez"
        },
        {
            "cardHeader": "Exámen",
            "cardBody": "Test IQ preguntas",
            "icon": <TbBrain size={25} />,
            "cardFooter": "8/10 respuestas",
            "cardFooter2": "la última vez"
        }
    ]

    return (

        <PWrapper
            Component={Training}
            pageProps={pageProps}
            router={router}
            translations="Training"
            timeZone={process.env.NEXT_PUBLIC_TIMEZONE || 'UTC'}
        >
            <div className='grid grid-cols-1 gap-10 w-full'>
                <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 w-full md:px-20 lg:px-30">
                    <CardTestTraining cards={objCard} />
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-14 w-full md:px-20 lg:px-20">
                    <ChartArea title="Resultados Exámenes"/>
                    <ChartArea title="Resultados Entrenamientos"/>
                </div>
            </div>

        </PWrapper>
    )

}

export async function getStaticProps({ locale }: GetStaticPropsContext & Props) {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
            translationNamespace: 'Home',
            locale: locale,
            timeZone: process.env.NEXT_PUBLIC_TIMEZONE
        }
    }
}



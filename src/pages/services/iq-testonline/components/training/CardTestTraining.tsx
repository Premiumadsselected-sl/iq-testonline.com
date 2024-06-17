import { AppProps } from "next/app";
import { GetStaticPropsContext } from "next";
import Drawer from './Drawer';


type Props = AppProps & {
    children: React.ReactNode
}

type Card = {
    cardHeader: string;
    cardBody: string;
    icon: React.ReactNode;
    cardFooter: string;
    cardFooter2: string;
};

type CardTestTrainingProps = {
    cards?: Card[];
};

const CardTestTraining: React.FC<CardTestTrainingProps> = ({ cards }) => {

    return (
        <>
            {cards?.map(element => (
                <label htmlFor="my-drawer" className="card bg-base-100 shadow-md transition-transform duration-300 transform hover:scale-105 cursor-pointer text-customGray force-dark-mode border-customBorderGray border-[1px]">
                    <div className="card-body gap-2 p-3">
                        <div className="flex justify-between">
                            <p className="font-medium text-base-content/70 cursor-pointer text-start">{element.cardHeader}</p>
                            <i className="bg-[#7e22ce3a] rounded-full p-1">{element.icon}</i>
                        </div>
                        <div className="flex items-center gap-2">
                            <h5 className="inline text-2xl/none font-semibold cursor-pointer">{element.cardBody}</h5>
                        </div>
                        <p className="text-sm font-medium cursor-pointer"><span className="text-success">{element.cardFooter}</span><span className="ms-1.5 text-base-content/60">{element.cardFooter2}</span></p>
                    </div>
                </label>
            ))}
            <Drawer />
        </>

    );
}

export default CardTestTraining;

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

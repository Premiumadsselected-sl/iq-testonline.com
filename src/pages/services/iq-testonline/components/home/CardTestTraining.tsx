type Card = {
    cardHeader: string;
    cardBody: string;
    icon: React.ReactNode;
    cardFooter: string;
    cardFooter2: string;
};

type CardTestTrainingProps = {
    cards: Card[];
};
const CardTestTraining: React.FC<CardTestTrainingProps> = ({ cards }) => {

    return (
        cards.map(element => (
            <div aria-label="Card" className="card bg-base-100 shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer">
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
            </div>
        ))
    );
}

export default CardTestTraining;
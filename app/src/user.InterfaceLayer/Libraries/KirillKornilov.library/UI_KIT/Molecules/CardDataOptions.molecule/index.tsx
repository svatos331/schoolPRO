import { FC } from "react";

import {ICardData} from "../../Atoms/CardData.Atom";


const CardDataOptions: FC<ICardData> = ({title, children}) => {

    return (

        <div className="column-card">
                <div className="title-box">
                <p className="title">{title}</p>
                <button >• • •</button>
                </div>

                <div className="children">
                    {children}
                </div>
        </div>
        
    );
};

export default CardDataOptions;
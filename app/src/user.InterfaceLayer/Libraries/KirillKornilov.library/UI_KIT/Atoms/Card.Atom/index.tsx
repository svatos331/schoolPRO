import { FC } from "react";

import "./styled/style.css";

interface ICard {
    children: JSX.Element
}

const Card:FC<ICard> = ({children}) => {

    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;
import { ICard } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule/type";
import React from "react";
import { RecHeaader } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/RecHeader";
import { Card } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule";

import cls from "./style/RecBar.module.css";

interface indexProps {
    headerTitle: string;
    cards: ICard[];
}

export const RecBar: React.FC<indexProps> = (props: indexProps) => {
    const { headerTitle, cards } = props;

    return (
        <div className={cls.bar}>
            <RecHeaader text={headerTitle}/>
            <div className={cls.cardList}>
                {cards.map((card) => 
                    <Card card={card} key={card.kinopoiskId}/>
                )}
            </div>
        </div>
    );
};
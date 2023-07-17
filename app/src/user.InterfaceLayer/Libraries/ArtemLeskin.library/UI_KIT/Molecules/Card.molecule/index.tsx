import React from "react";
import { ICard } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule/type";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { Link } from "react-router-dom";

import cls from "./style/Card.module.css";

interface CardProps {
    card: ICard;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
    const { card } = props;

    return (
        <Link to={`/artemLeskin/movie/${card.id}`} style={{backgroundImage: `url(${card.preview})`}} className={cls.card}>
            <div className={cls.shadow}>
                <div className={cls.rating}>{card.rating}</div>
                <div className={cls.info}>
                    <Text title={card.name} size={TextSize.L}/>
                    <Text title={`${card.year}г ${card.filsLength} мин`}/>
                </div>
            </div>
        </Link>
    );
};
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
        <Link to={`/artemLeskin/movie/${card.kinopoiskId}`} style={{backgroundImage: `url(${card.posterUrlPreview})`}} className={cls.card}>
            <div className={cls.shadow}>
                <div className={cls.rating}>{card.ratingKinopoisk}</div>
                <div className={cls.info}>
                    <Text title={card.nameRu} size={TextSize.L}/>
                </div>
            </div>
        </Link>
    );
};
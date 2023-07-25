import React from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";

import * as ST from "./style/style";
import { CardProps } from "./type/index";

export const Card: React.FC<CardProps> = (props: CardProps) => {
    const { card } = props;

    return (
        <ST.Card to={`/artemLeskin/movie/${card.kinopoiskId}`} style={{backgroundImage: `url(${card.posterUrlPreview})`}}>
            <ST.Shadow>
                {card.ratingKinopoisk &&
                    <ST.Rating rating={card?.ratingKinopoisk+""}/>
                }
                <ST.Info>
                    <Text title={card.nameRu} size={TextSize.L}/>
                </ST.Info>
            </ST.Shadow>
        </ST.Card>
    );
};
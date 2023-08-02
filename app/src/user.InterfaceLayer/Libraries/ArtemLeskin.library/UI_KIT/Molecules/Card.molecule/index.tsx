import React, { memo } from "react";
import Text from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text/type";

import * as ST from "./style/style";
import { CardProps } from "./type/index";

const Card: React.FC<CardProps> = (props: CardProps) => {
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

export default memo(Card);

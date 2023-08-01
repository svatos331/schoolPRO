import React, { memo } from "react";
import RecHeaader from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/RecHeader";
import Card from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule";
import { ICard } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule/type";
import Text from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text/type";

import * as ST from "./style/style";
import { CardBarProps } from "./type/index";



const CardBar: React.FC<CardBarProps> = (props: CardBarProps) => {
    const { headerTitle, parament, useGetMovie } = props;
    const {data, isLoading}  = useGetMovie({parament});

    // eslint-disable-next-line no-console
    console.log(data);

    return (
        <ST.Bar>
            <RecHeaader text={headerTitle}/>
            {isLoading && <Text title="Loading..." size={TextSize.XL}/>}
            <ST.CardList>
                {data?.map((card: ICard) => 
                    <Card card={card} key={card.kinopoiskId}/>
                )}
            </ST.CardList>
        </ST.Bar>
    );
};

export default memo(CardBar);
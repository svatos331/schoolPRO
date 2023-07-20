import React from "react";
import { AdviceCardData } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/AdviceBar/const";
import { AdviceCard } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/AdviceCard.molecule";

import { AdviceBarProps } from "./type/index";
import * as ST from "./style/style";

export const AdviceBar: React.FC<AdviceBarProps> = ({useGetAllMovieQuery}: AdviceBarProps) => {

    return (
        <ST.List>
             {AdviceCardData.map((card) => {
                return (<AdviceCard func={useGetAllMovieQuery}  key={card.text} text={card.text} link={card.link}>
                    <ST.IconWrap>
                        <card.Icon/>
                    </ST.IconWrap>
                </AdviceCard>);
            })}
        </ST.List>
    );
};
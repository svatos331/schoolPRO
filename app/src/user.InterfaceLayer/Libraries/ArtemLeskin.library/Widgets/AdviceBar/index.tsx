import React, { memo } from "react";
import { AdviceCardData } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/AdviceBar/const";
import AdviceCard from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/AdviceCard.molecule";

import { AdviceBarProps } from "./type/index";
import * as ST from "./style/style";

const AdviceBar: React.FC<AdviceBarProps> = ({useGetAllMovieQuery, changeGanre}: AdviceBarProps) => {

    return (
        <ST.List>
             {AdviceCardData.map((card) => {
                return (
                <AdviceCard 
                    func={useGetAllMovieQuery} 
                    changeGanre={changeGanre} 
                    key={card.text} 
                    text={card.text}
                    value={card.value}
                    >
                        <ST.IconWrap>
                            <card.Icon/>
                        </ST.IconWrap>
                </AdviceCard>);
            })}
        </ST.List>
    );
};

export default memo(AdviceBar);
import React from "react";
import { AdviceCardData } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/AdviceBar/const";
import { AdviceCard } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/AdviceCard.molecule";

import cls from "./style/AdviceBar.module.css";

interface AdviceBarProps {
    useGetAllMovieQuery: any
}

export const AdviceBar: React.FC<AdviceBarProps> = ({useGetAllMovieQuery}: AdviceBarProps) => {

    return (
        <div className={cls.list}>
            {AdviceCardData.map((card) => {
                return (<AdviceCard func={useGetAllMovieQuery}  key={card.text} text={card.text} link={card.link}>
                    <card.Icon className={cls.icon}/>
                </AdviceCard>);
            })}
        </div>
    );
};
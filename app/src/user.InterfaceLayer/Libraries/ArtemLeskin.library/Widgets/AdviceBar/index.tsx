import React from "react";
import { AdviceCardData } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/AdviceBar/const";
import { AdviceCard } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/AdviceCard.molecule";

import cls from "./style/AdviceBar.module.css";

export const AdviceBar: React.FC = () => {

    return (
        <div className={cls.list}>
            {AdviceCardData.map((card) => {
                return (<AdviceCard key={card.text} text={card.text} link={card.link}>
                    <card.Icon className={cls.icon}/>
                </AdviceCard>);
            })}
        </div>
    );
};
import React, { ReactNode } from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { Link } from "react-router-dom";

import cls from "./style/AdviceCard.module.css";

interface AdviceCard {
    link: string;
    text: string;
    children: ReactNode;
    func: any
}

export const AdviceCard: React.FC<AdviceCard> = (props: AdviceCard) => {
    const { link, text, children, func } = props;

        func({page: 1, type: "FILM"});

    return (
        <Link to={link} className={cls.card} >
            {children}
            <Text text={text} size={TextSize.M}/>
        </Link>
    );
};
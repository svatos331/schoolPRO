import React from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";

import * as ST from "./style/style";
import { AdviceCardProps } from "./type/index";



export const AdviceCard: React.FC<AdviceCardProps> = (props: AdviceCardProps) => {
    const { link, text, children, func } = props;

        func({page: 1, type: "FILM"});

    return (
        <ST.Card to={link}>
            {children}
            <Text text={text} size={TextSize.M}/>
        </ST.Card>
    );
};
import React from "react";
import Text from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text/type";

import * as ST from "./style/style";
import { AdviceCardProps } from "./type/index";



export const AdviceCard: React.FC<AdviceCardProps> = (props: AdviceCardProps) => {
    const { link, text, children } = props;

    return (
        <ST.Card to={link}>
            {children}
            <Text text={text} size={TextSize.M}/>
        </ST.Card>
    );
};
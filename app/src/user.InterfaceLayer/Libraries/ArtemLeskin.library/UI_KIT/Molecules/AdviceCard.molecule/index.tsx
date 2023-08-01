import React, { memo } from "react";
import Text from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text/type";

import * as ST from "./style/style";
import { AdviceCardProps } from "./type/index";



const AdviceCard: React.FC<AdviceCardProps> = (props: AdviceCardProps) => {
    const { text, children, value, changeGanre } = props;

    return (
        <ST.Card to={"/artemLeskin/list/movie"} onClick={() => changeGanre(value)}>
            {children}
            <Text text={text} size={TextSize.M}/>
        </ST.Card>
    );
};

export default memo(AdviceCard);
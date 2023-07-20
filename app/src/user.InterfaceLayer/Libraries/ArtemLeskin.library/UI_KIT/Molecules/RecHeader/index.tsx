import React from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";

import { ReactComponent as Row } from "../../../assets/icons/RightRow.svg";
import { RecHeaderProps } from "./type/index";
import * as ST from "./style/style";

export const RecHeaader: React.FC<RecHeaderProps> = (props: RecHeaderProps) => {
    const { text } = props;

    return (
        <ST.Header>
            <Text title={text} size={TextSize.XL} />
            <ST.Btn>
                <ST.IconWrap>
                    <Row/>
                </ST.IconWrap>
            </ST.Btn>
        </ST.Header>
    );
};
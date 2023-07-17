import React from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";

import { ReactComponent as Row } from "../../../assets/icons/RightRow.svg";
import cls from "./style/RecHeader.module.css";

interface RecHeaderProps {
    text?: string;
}

export const RecHeaader: React.FC<RecHeaderProps> = (props: RecHeaderProps) => {
    const { text } = props;

    return (
        <div className={cls.header}>
            <Text title={text} size={TextSize.XL} />
            <div className={cls.btn}>
                <Row className={cls.icon}/>
            </div>
        </div>
    );
};
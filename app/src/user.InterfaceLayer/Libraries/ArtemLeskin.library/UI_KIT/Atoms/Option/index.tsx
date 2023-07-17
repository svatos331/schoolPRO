import React from "react";

import cls from "./style/Option.module.css";

interface OptionProps {
    text: string;
    value: string
}

export const Option: React.FC<OptionProps> = (props: OptionProps) => {
    const { text, value } = props;

    return (
        <option className={cls.option} value={value} selected={value===" "?true:false}>
            {text}
        </option>
    );
};
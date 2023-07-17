import React  from "react";
import { Option } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Option";

import cls from "./style/Select.module.css";

interface SelectProps {
    textOptionList: string[];
    valueOptionList: string[];
}

export const Select: React.FC<SelectProps> = (props: SelectProps) => {
    const {  textOptionList, valueOptionList } = props;

    return (
        <select className={cls.select}>
            {textOptionList.map((text, index) => (
                <Option 
                    value={valueOptionList[index]} 
                    text={text} 
                    key={valueOptionList[index]}
                />
            ))}
        </select>
    );
};
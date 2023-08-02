import React, { memo }  from "react";
import Option from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Option";

import * as ST from "./style/style";
import { SelectProps } from "./type/index";

const Select: React.FC<SelectProps> = (props: SelectProps) => {
    const {  textOptionList, valueOptionList, onChange } = props;

    return (
        <ST.Select defaultValue={valueOptionList[0]} onChange={(e) => onChange(e.target.value)}>
            {textOptionList.map((text, index) => (
                <Option 
                    value={valueOptionList[index]} 
                    text={text} 
                    key={valueOptionList[index]}
                />
            ))}
        </ST.Select>
    );
};

export default memo(Select);
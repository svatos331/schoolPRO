import React, { memo } from "react";

import {IInput} from "./type/index";
import * as ST from "./style/style";

const Input: React.FC<IInput> = (props: IInput) => {
    const {placceholder, value, onChange} = props;

    return (
        <ST.Input 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            placeholder={placceholder}
        />
    );
};

export default memo(Input);
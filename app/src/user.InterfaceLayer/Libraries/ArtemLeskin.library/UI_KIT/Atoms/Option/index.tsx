import React from "react";

import * as ST from "./style/style";
import { OptionProps } from "./type/index";

export const Option: React.FC<OptionProps> = (props: OptionProps) => {
    const { text, value } = props;

    return (
        <ST.Option value={value}>
            {text}
        </ST.Option>
    );
};
import React, { memo } from "react";

import * as ST from "./style/style";
import { OptionProps } from "./type/index";

const Option: React.FC<OptionProps> = (props: OptionProps) => {
    const { text, value } = props;

    return (
        <ST.Option value={value}>
            {text}
        </ST.Option>
    );
};

export default memo(Option);
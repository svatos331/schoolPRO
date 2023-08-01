import React, { memo } from "react";

import * as ST from "./style/style";

const Logo: React.FC = () => {

    return (
        <ST.Logo>
            KINO<ST.Blue>MORE</ST.Blue>
        </ST.Logo>
    );
};

export default memo(Logo);
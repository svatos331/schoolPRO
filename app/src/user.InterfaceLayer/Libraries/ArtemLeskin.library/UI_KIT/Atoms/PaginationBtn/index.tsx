import React, { memo } from "react";

import * as ST from "./style/style";
import { IPaginationBtn } from "./type/index";

const PaginationBtn: React.FC<IPaginationBtn> = (props: IPaginationBtn) => {
    const {value, func, active} = props;

    return (
        <ST.BtnPag onClick={() => func(value)} active={active}>
            {value}
        </ST.BtnPag>
    );
};

export default memo(PaginationBtn);
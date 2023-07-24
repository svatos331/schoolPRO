
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import * as ST from "./styled";
import {CardListWidgetProps} from "./type";

const CardListModule :FC<CardListWidgetProps>= ({getMe}) => {
    const {data:userData} = getMe({});

    return (<ST.CardListModuleWrapper>
        
            <div>1</div>

    </ST.CardListModuleWrapper>);
};
export default CardListModule;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useId, useMemo} from "react";

import * as ST from "./styled";
import {CardListWidgetProps} from "./type";
import MoneyCard from "../../../../UI_KIT/Molecules/MoneyCard";

const CardListModule :FC<CardListWidgetProps>= ({getMe}) => {
    const {data:userData, isLoading, isError} = getMe({});

    const cards = useMemo(() => {
        return userData?.cards||[];
    }, [userData]);

    return (<ST.CardListModuleWrapper>
        {
            cards.map((card,i) => {

                return <MoneyCard key = {i} {...card}/>;
            })
        }

    </ST.CardListModuleWrapper>);
};
export default CardListModule;
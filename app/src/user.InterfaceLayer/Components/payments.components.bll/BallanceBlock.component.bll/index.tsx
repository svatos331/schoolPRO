import React from "react";
import {styled} from "styled-components";
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {QueryDefinition} from "@reduxjs/toolkit/query";

import {
     useGetMeQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";
import BalanceBlock from "../../../Libraries/payments.library/Widgets/ballanceBlock";
import {
    IBalanceUserResponse
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/services/dto/from.dto";



const BalanceBlockComponent = () => {


    return (
        <>
            <BalanceBlock getMe={useGetMeQuery as UseQuery<QueryDefinition<any, any, any, IBalanceUserResponse>>}/>
        </>
    );
};

export default BalanceBlockComponent;

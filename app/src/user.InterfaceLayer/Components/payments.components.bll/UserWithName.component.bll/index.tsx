// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {QueryDefinition} from "@reduxjs/toolkit/query";

import UserWithNameWidget from "../../../Libraries/payments.library/Widgets/UserWithNameWidget";
import {
    useGetMeQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";
import {
    IBalanceUserResponse
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/services/dto/from.dto";
// eslint-disable-next-line @typescript-eslint/no-unused-vars



const UserWithNameComponent: FC = () => {
    
    return <UserWithNameWidget getBalance={useGetMeQuery as UseQuery<QueryDefinition<any, any, any, IBalanceUserResponse>>}/>;
};
export default UserWithNameComponent;
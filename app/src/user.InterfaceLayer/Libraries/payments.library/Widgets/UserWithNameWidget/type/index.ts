import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {QueryDefinition} from "@reduxjs/toolkit/query";
import {
    IBalanceUserResponse, IUserDTO
} from "../../../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/services/dto/from.dto";

export type IUserWithNameWidgetProps = {
    getBalance : UseQuery<QueryDefinition<any, any, any, IBalanceUserResponse>>
};
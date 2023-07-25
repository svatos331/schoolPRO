import {UseMutation, UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {MutationDefinition, QueryDefinition} from "@reduxjs/toolkit/query";


import {
    IBaseInfoUserDTO, UsersBaseInfoArray
} from "../../../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/userBaseInfo.entity/services/dto/from.dto";
import {
    IBalanceUserResponse
} from "../../../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/services/dto/from.dto";

export type IPaymentBlockProps = {
    getMe: UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO>>
}

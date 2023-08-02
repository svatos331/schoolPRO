import {
	UseMutation,
	UseQuery,
} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
	MutationDefinition,
	QueryDefinition,
	SkipToken,
} from "@reduxjs/toolkit/query";

import {
	IBaseInfoUserDTO,
	UsersBaseInfoArray,
} from "../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/services/dto/from.dto";
import { IBalanceUserResponse } from "../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/services/dto/from.dto";

export type IPaymentBlockProps = {
	getMe: UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO>>;
	getUsers: UseQuery<QueryDefinition<any, any, any, UsersBaseInfoArray>>;
	putMoney: UseMutation<
		MutationDefinition<any, any, any, IBalanceUserResponse>
	>;
	selectedUserIdSelector: (val: any | never) => any;
	paySumSelector: (val: any | never) => any;
};

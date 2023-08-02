import {
	UseMutation,
	UseQuery,
} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
	MutationDefinition,
	QueryDefinition,
	SkipToken,
} from "@reduxjs/toolkit/query";

import { IBaseInfoUserDTO } from "../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/users.entity/services/dto/from.dto";
import { IBalanceUserResponse } from "../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/services/dto/from.dto";
import { IPutMoneyProps } from "../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/cards.entity/redux/api";

export type IPaymentBlockProps = {
	getMe: UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO>>;
	getUsers: UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO[]>>;
	putMoney: UseMutation<
		MutationDefinition<IPutMoneyProps, any, any, IBalanceUserResponse>
	>;
	selectedUserIdSelector: (val: any | never) => any;
	paySumSelector: (val: any | never) => any;
};

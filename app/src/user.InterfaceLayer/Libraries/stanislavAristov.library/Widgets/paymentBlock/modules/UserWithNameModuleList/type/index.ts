import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";

import {
	IBaseInfoUserDTO,
	UsersBaseInfoArray,
} from "../../../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/userBaseInfo.entity/services/dto/from.dto";

export type IUserWithNameWidgetProps = {
	getAllUsers: UseQuery<QueryDefinition<any, any, any, UsersBaseInfoArray>>;
	getMe: UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO>>;
};

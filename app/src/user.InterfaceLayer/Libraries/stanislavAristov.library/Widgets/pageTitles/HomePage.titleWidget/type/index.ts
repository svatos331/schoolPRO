import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";

import { IUserDTO } from "../../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/services/dto/from.dto";
import { IBaseInfoUserDTO } from "../../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/userBaseInfo.entity/services/dto/from.dto";

export type IHomePageTitleWidgetProps = {
	openFunc: () => void;
	getMe: UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO>>;
};

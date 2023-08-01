import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";

import { IUserDTO } from "../../../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/services/dto/from.dto";

export type CardListWidgetProps = {
	getMe: UseQuery<QueryDefinition<any, any, any, IUserDTO>>;
};

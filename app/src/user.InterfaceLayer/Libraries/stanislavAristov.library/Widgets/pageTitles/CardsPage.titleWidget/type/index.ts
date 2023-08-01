import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {QueryDefinition} from "@reduxjs/toolkit/query";

import {
  IBaseInfoUserDTO
} from "../../../../../../../business.InterfaceLayer/store/shared/entities/aristovStanislav.entities/payments.entity/userBaseInfo.entity/services/dto/from.dto";

export type ICardsPageTitleWidgetProps = {
  title?:string,
  getMe:UseQuery<QueryDefinition<any, any, any, IBaseInfoUserDTO>>
};
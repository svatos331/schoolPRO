import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";

import { ICardDTO } from "../../../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/cards.entity/services/dto/from.dto";

export type CardListWidgetProps = {
	getCards: UseQuery<QueryDefinition<any, any, any, ICardDTO[]>>;
};

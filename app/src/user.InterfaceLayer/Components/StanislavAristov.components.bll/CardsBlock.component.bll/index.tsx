import React from "react";

import CardsBlock from "../../../Libraries/stanislavAristov.library/Widgets/cardsBlock";
import { useGetCardsQuery } from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/cards.entity/redux/api";

const CardsBlockComponent = () => {
	return <CardsBlock getCards={useGetCardsQuery} />;
};

export default CardsBlockComponent;

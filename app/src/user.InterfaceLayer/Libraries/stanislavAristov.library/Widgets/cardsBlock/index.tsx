import React, { FC } from "react";

import * as ST from "./styled/index";
import { ICardsBlockProps } from "./type";
import CardListModule from "./modules/cardListWidget";

const CardsBlock: FC<ICardsBlockProps> = ({ getCards }) => {
	return (
		<ST.CardsBlock>
			<ST.CardsList>
				<CardListModule getCards={getCards} />
			</ST.CardsList>
			<ST.ResentTransactions>
				<div>1</div>
			</ST.ResentTransactions>
		</ST.CardsBlock>
	);
};

export default CardsBlock;

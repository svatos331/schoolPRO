import React, { FC } from "react";
import { styled } from "styled-components";

import * as ST from "./styled/index";
import { ICardsBlockProps } from "./type";
import CardListModule from "./modules/cardListWidget";

const CardsBlock: FC<ICardsBlockProps> = ({ getMe }) => {
	return (
		<ST.CardsBlock>
			<ST.CardsList>
				<CardListModule getMe={getMe} />
			</ST.CardsList>
			<ST.ResentTransactions>
				<div>1</div>
			</ST.ResentTransactions>
		</ST.CardsBlock>
	);
};

export default CardsBlock;

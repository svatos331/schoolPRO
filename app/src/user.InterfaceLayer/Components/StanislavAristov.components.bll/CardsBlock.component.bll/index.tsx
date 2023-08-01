import React from "react";
import { styled } from "styled-components";

import { useGetMeQuery } from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/redux/api";
import CardsBlock from "../../../Libraries/stanislavAristov.library/Widgets/cardsBlock";

const CardsBlockComponent = () => {
	return (
		<>
			<CardsBlock getMe={useGetMeQuery} />
		</>
	);
};

export default CardsBlockComponent;

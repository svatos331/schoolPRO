import React, { FC } from "react";

import BtnUpdateNavType from "./type/type";
import * as ST from "./styled";
import { Line } from "../Line";

export const BtnUpdateNav: FC<BtnUpdateNavType> = ({
	type = "button",
	text,
	onClick,
	isFocus,
}) => {
	return (
		<ST.divContNav>
			<ST.btn
				type={type}
				onClick={onClick}
				isFocus={isFocus}
			>
				{text}
			</ST.btn>
			<Line />
		</ST.divContNav>
	);
};

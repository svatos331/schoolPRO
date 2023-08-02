import React, { FC } from "react";

import BtnSignType from "./type/type";
import * as ST from "./styled";

export const BtnResetFields: FC<BtnSignType> = ({ type, text, onClick }) => {
	return (
		<ST.btn
			type={type}
			onClick={onClick}
		>
			{text}
		</ST.btn>
	);
};

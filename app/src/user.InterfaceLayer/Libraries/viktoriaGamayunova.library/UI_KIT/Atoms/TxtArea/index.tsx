import React, { FC } from "react";

import TxtAreaType from "./type/type";
import * as ST from "./styled";

export const TxtArea: FC<TxtAreaType> = ({
	placeholder,
	onChange,
	value = "",
}) => {
	return (
		<ST.TxtArea
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
	);
};

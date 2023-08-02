import React, { FC } from "react";

import InputUpdType from "./type/type";
import * as ST from "./styled";

export const InputUpd: FC<InputUpdType> = ({
	type,
	placeholder,
	onChange,
	value = "",
}) => {
	return (
		<ST.input
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
	);
};

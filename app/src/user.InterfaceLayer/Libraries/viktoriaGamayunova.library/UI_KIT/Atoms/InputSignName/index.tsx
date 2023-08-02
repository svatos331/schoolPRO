import React, { FC } from "react";

import InputSignType from "./type/type";
import * as ST from "./styled";

export const InputSignName: FC<InputSignType> = ({
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

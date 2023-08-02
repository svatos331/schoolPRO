import React, { FC } from "react";

import InputRadioType from "./type/type";
import * as ST from "./styled";

export const InputRadio: FC<InputRadioType> = ({
	type,
	name,
	value,
	id,
	checked,
	onChange,
}) => {
	return (
		<ST.input
			type={type}
			name={name}
			value={value}
			id={id}
			checked={checked}
			onChange={onChange}
		/>
	);
};

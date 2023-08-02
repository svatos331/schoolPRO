import React, { FC } from "react";

import * as ST from "./styled";
import SelectType from "./type/type";

export const SelectCategory: FC<SelectType> = ({
	options,
	onChange,
	value,
}) => {
	return (
		<ST.select
			onChange={onChange}
			// defaultValue={options[0].id}
			value={value}
		>
			{options.map((opt) => (
				<option
					value={opt.id}
					key={opt.id}
					label={opt.name}
				/>
			))}
		</ST.select>
	);
};

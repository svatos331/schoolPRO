import React, { FC } from "react";

import CheckBoxType from "./type/type";
// import * as ST from "./styled";

export const CheckBox: FC<CheckBoxType> = ({
	cat,
	handleChangeCat,
	isChecked,
}) => {
	return (
		<div key={cat.id}>
			<input
				type="checkbox"
				value={cat.id}
				id={`cb_${cat.id}`}
				checked={isChecked}
				onChange={handleChangeCat}
				onSubmit={(e) => e.preventDefault()}
			/>
			<label htmlFor={`cb_${cat.id}`}>{cat.name}</label>
		</div>
	);
};

import React, { FC } from "react";

import BtnsUpdResetType from "./type/type";
import * as ST from "./styled";
import { BtnUpdInfo } from "../../Atoms/BtnUpdInfo";
import { BtnResetFields } from "../../Atoms/BtnResetFields";

export const BtnsUpdResetMolecule: FC<BtnsUpdResetType> = ({
	type,
	textUpd,
	textReset,
	onClickUpd,
	onClickReset,
}) => {
	return (
		<ST.divBtns>
			<BtnUpdInfo
				type={type}
				text={textUpd}
				onClick={onClickUpd}
			/>
			<BtnResetFields
				type={type}
				text={textReset}
				onClick={onClickReset}
			/>
		</ST.divBtns>
	);
};

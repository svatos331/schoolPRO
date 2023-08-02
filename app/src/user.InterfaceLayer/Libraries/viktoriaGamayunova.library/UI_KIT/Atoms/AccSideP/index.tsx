import React, { FC } from "react";

import * as ST from "./styled";
import AccSidePType from "./type/type";

export const AccSideP: FC<AccSidePType> = ({ text }) => {
	return <ST.pSide>{text}</ST.pSide>;
};

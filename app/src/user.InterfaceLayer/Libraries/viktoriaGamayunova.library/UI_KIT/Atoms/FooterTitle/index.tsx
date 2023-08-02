import React, { FC } from "react";

import FooterTitleType from "./type/type";
import * as ST from "./styled";

export const FooterTitle: FC<FooterTitleType> = ({ text }) => {
	return <ST.pTitle>{text}</ST.pTitle>;
};

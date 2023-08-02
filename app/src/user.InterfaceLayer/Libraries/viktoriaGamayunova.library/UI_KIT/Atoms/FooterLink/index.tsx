import React, { FC } from "react";

import FooterLinkType from "./type/type";
import * as ST from "./styled";

export const FooterLink: FC<FooterLinkType> = ({ text }) => {
	return <ST.a>{text}</ST.a>;
};

import React, { FC } from "react";

import FooterTextType from "./type/type";
import * as ST from "./styled";

export const FooterText: FC<FooterTextType> = ({ text }) => {
	return <ST.p>{text}</ST.p>;
};

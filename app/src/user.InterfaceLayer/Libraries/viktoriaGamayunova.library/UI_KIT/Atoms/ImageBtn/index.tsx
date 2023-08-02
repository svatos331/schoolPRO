import React, { FC } from "react";

import ImageHeaderType from "./type/type";
import * as ST from "./styled";

export const ImageHeader: FC<ImageHeaderType> = ({
	img,
	color_fill = false,
}) => {
	return <ST.cont color_fill={color_fill}>{img}</ST.cont>;
};

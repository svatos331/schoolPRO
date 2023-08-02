import React, { FC } from "react";

import * as ST from "./styled";
import ProductImageType from "./type/type";

export const ProductImage: FC<ProductImageType> = ({
	src,
	width,
	height,
	margin = "",
}) => {
	return (
		<ST.imgProd
			src={src}
			width={width}
			height={height}
			margin={margin}
		/>
	);
};

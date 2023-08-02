import React, { FC } from "react";

import photo from "../../../assets/icons/product.svg";
import star from "../../../assets/icons/yellow_star.svg";
import label from "../../../assets/icons/label.svg";
import ProductCardType from "./type/type";
import * as ST from "./styled";
import { ProductImage } from "../../Atoms/ProductImage";

export const ProductCardMolecule: FC<ProductCardType> = ({
	img,
	name,
	rating,
	category,
	price,
}) => {
	return (
		<ST.divCont>
			<ProductImage
				src={img != "" ? img : photo}
				width="128px"
				height="128px"
			/>
			<ST.p>{name}</ST.p>
			<ST.divWithImg>
				<ProductImage
					src={star}
					width="16px"
					height="16px"
					margin="5px"
				/>
				<ST.p>{rating}</ST.p>
			</ST.divWithImg>
			<ST.divWithImg>
				<ProductImage
					src={label}
					width="16px"
					height="16px"
					margin="5px"
				/>
				<ST.p>{category}</ST.p>
			</ST.divWithImg>

			<ST.p>{price} PLN</ST.p>
		</ST.divCont>
	);
};

import React from "react";
import { useParams } from "react-router-dom";

import ListProducts from "../../../Libraries/viktoriaGamayunova.library/Widgets/ListProducts";

const ShopComponents = () => {
	const Id = Number(useParams().id);

	return <ListProducts influenserId={Id} />;
};

export default ShopComponents;

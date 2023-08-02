import React from "react";

import ListProducts from "../../../Libraries/viktoriaGamayunova.library/Widgets/ListProducts";
import { useGetAllUserQuery } from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/api";

const ProductsComponents = () => {
	return <ListProducts useGetAllUserQuery={useGetAllUserQuery} />;
};

export default ProductsComponents;

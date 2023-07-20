import React from "react";

import ProductItemModule from "../../../Libraries/ElenaBokova.library/Widgets/CatalogWidget/modules/ProductItem";
import {
    useGetProductQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/elenaBokova.entities/products.entity/redux/api";


// @ts-ignore
const ProductItem = ({ item }) => {

    return <ProductItemModule item={item} />;

};

export default ProductItem;
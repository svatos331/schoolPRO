import React from "react";
import CatalogWidget from "../../../Libraries/ElenaBokova.library/Widgets/CatalogWidget";
import {
    useGetProductQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/elenaBokova.entities/products.entity/redux/api";


const Catalog = () => {
    return <CatalogWidget useGetProductQuery={useGetProductQuery}/>;
};

export default Catalog;
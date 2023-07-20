import React, { FC } from "react";
import {
    useGetProductQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/elenaBokova.entities/products.entity/redux/api";
import Favorite from "../../../Components/ElenaBokova.components.bll/Favorite.component.bll";

const FavoritePage: FC = () =>
    <Favorite useGetProductsQuery={useGetProductQuery} />;

export default FavoritePage;

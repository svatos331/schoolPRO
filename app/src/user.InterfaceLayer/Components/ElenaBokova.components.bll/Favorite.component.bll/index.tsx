import React, {FunctionComponent} from "react";

import CatalogType from "./type";

import {SecondTitle} from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Title/styled/styled";
import {FavoriteList, StyledSection} from "./styled/styled";
import ProductItem from "../ProductItem.component.bll";
import {useAppSelector} from "../../../../business.InterfaceLayer/store/services/hooks/redux";

const Favorite: FunctionComponent<CatalogType> = ({useGetProductsQuery}) => {

    // @ts-ignore
    //const favorites = JSON.parse(localStorage.getItem("favoriteItems"))
    const{favoriteItems} = useAppSelector(state => state.favorite)

    return (
        <StyledSection>
            <SecondTitle as="h2">Your favorite products</SecondTitle>
            <FavoriteList>
                {favoriteItems.length ? (
                    favoriteItems.map((item: { id: number}) => <ProductItem key={item.id} item={item}/>)
                ) : (
                    <p>You haven't added anything yet...</p>
                )}
            </FavoriteList>
            </StyledSection>
        )};

export default Favorite;
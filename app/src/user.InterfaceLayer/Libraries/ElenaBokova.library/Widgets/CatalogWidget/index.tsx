import React, {FunctionComponent} from "react";

import CatalogType from "./type";

import {CatalogList} from "./styled/styled";

import ProductItem from "../../../../Components/ElenaBokova.components.bll/ProductItem.component.bll";
import {SecondTitle} from "../../UI_KIT/Atoms/Title/styled/styled";

const CatalogWidget: FunctionComponent<CatalogType> = ({useGetProductQuery}) => {
    const {data = []} = useGetProductQuery({authToken: ""});

    return (
        <section>
            <SecondTitle as="h2">Product catalog</SecondTitle>
            <CatalogList>
                {data.length ? (
                    data.map((item: { id: number}) => <ProductItem key={item.id} item={item}/>)
                ) : (
                    <p>There are no products</p>
                )}
            </CatalogList>
            </section>
        )};

export default CatalogWidget;
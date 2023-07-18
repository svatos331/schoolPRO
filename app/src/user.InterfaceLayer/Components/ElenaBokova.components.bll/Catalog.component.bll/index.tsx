import React, {FunctionComponent} from "react";

import CatalogType from "./type";
import ProductItem from "../ProductItem.component.bll";
import {CatalogList} from "./styled/styled";
import {SecondTitle} from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Title/styled/styled";

const Catalog: FunctionComponent<CatalogType> = ({useGetProductsQuery}) => {
    const {data = []} = useGetProductsQuery({authToken: ""});

    // // @ts-ignore
    // data.forEach((item) => console.log(JSON.stringify(item.name)))

    // return <div>data from jsonplaceholder : {JSON.stringify(data)}</div>;
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

export default Catalog;
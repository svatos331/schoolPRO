import React from "react";
import {CatalogItem} from "./styled/styled";
import addToFav from "../../../../assets/icons/addToFav.svg"
import deleteFromFav from "../../../../assets/icons/deleteFromFav.svg"
import {useActions} from "../../../../../../../business.InterfaceLayer/store/services/hooks/useActions";
import {LikeButton} from "../../../../UI_KIT/Atoms/Button/styled/styled";
import {SecondTitle} from "../../../../UI_KIT/Atoms/Title/styled/styled";
import Button from "../../../../UI_KIT/Atoms/Button";


// @ts-ignore
function ProductItemModule({ item }) {
    const image = `/images/${item.id}.png`

    const {toggleFavorite} = useActions()

    return (
        <CatalogItem>
            <img src={image} alt={"product photo"} style={{width:'140px'}}>
            </img>
            <LikeButton aria-label="add to favorites" onClick={() => {
                toggleFavorite(item);
            }}>
                <img src={addToFav} alt=""/>
                {/*{isFavorite? <img src={deleteFromFav} alt=""/> : <img src={addToFav} alt=""/>}*/}
            </LikeButton>
            <div>
                <SecondTitle as="h3">{item.name}</SecondTitle>
            </div>
            <Button type="button">Add to cart</Button>
        </CatalogItem>
    );
}

export default ProductItemModule;


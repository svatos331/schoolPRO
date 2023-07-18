import {Item} from "./styled/styled";
import {SecondTitle} from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Title/styled/styled";
import {LikeButton} from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Button/styled/styled";
import Button from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Button";
import React from "react";
import addToFav from "../../../Libraries/ElenaBokova.library/assets/icons/addToFav.svg"
import deleteFromFav from "../../../Libraries/ElenaBokova.library/assets/icons/deleteFromFav.svg"
import {useActions} from "../../../../business.InterfaceLayer/store/services/hooks/useActions";
import {useAppSelector} from "../../../../business.InterfaceLayer/store/services/hooks/redux";

// @ts-ignore
function ProductItem({ item }) {
    const image = `/images/${item.id}.png`

    // @ts-ignore
    const favorites = useAppSelector( (state) => state.favorite)

    const {toggleFavorite} = useActions()
    // @ts-ignore
    const isExist = favorites.some(element => element.id === item.id)

    return (
        <Item>
            <img src={image} alt={"product photo"} style={{width:'140px'}}>
            </img>
            <LikeButton aria-label="add to favorites" onClick={() => toggleFavorite(item)}>
                {isExist? <img src={deleteFromFav} alt=""/> : <img src={addToFav} alt=""/>}
            </LikeButton>
            <div>
                <SecondTitle as="h3">{item.name}</SecondTitle>
            </div>
            <Button >Add to cart</Button>
        </Item>
    );
}

export default ProductItem;


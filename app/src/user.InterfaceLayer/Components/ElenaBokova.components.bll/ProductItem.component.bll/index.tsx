import {Item} from "./styled/styled";
import {SecondTitle} from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Title/styled/styled";
import {LikeButton} from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Button/styled/styled";
import Button from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Button";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    favoriteActions
} from "../../../../business.InterfaceLayer/store/shared/entities/elenaBokova.entities/favorite.entity/redux/slice";

// @ts-ignore
function ProductItem({ item }) {

    // const state = useSelector( state => state)
    // console.log(state.favorite[0])

    const dispatch = useDispatch();

    const image = `/images/${item.id}.png`
    // @ts-ignore
    return (
        <Item>
            <img src={image} alt={"product photo"} style={{width:'140px'}}>
            </img>
            <LikeButton onClick={() => dispatch(favoriteActions.toggleFavorite(item))}/>
            <div>
                <SecondTitle as="h3">{item.name}</SecondTitle>
            </div>
            <Button >Add to cart</Button>
        </Item>
    );
}

export default ProductItem;


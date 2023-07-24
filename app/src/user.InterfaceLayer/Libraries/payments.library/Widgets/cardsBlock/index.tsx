import React, {FC} from "react";
import {styled} from "styled-components";
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {QueryDefinition} from "@reduxjs/toolkit/query";

import arrow from "../../assets/icons/arrow/nonstraingt/SmallArrow.svg";
import BalanceWidget from "./modules/ballanceWidget";
import {
    IUserDTO
} from "../../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/services/dto/from.dto";
import {CheckBalance} from "../../../../Pages/payments.pages/Home.page/styled";
import PrimaryButton from "../../UI_KIT/Molecules/PrimaryButton";
import * as ST from "./styled/index";
import {ICardsBlockProps} from "./type";
import {ResentTransactions} from "./styled/index";
import CardListModule from "./modules/cardListWidget";


const CardsBlock :FC<ICardsBlockProps>= ({getMe}) => {


    return (
        <ST.CardsBlock>
            <ST.CardsList>
                <CardListModule getMe = {getMe}/>
            </ST.CardsList>
            <ST.ResentTransactions>
                <PrimaryButton
                    height={"150px"}
                    width={"100%"}
                    text={"Check Your Account Balance"}
                    hasIcon={true}
                    icon={arrow}
                    contentposition={"between"}/>
            </ST.ResentTransactions>
        </ST.CardsBlock>
    );
};

export default CardsBlock;

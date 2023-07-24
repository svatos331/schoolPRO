import React from "react";
import {styled} from "styled-components";


import BalanceWidget from "../../../Libraries/payments.library/Widgets/ballanceBlock/modules/ballanceWidget";
import PrimaryButton from "../../../Libraries/payments.library/UI_KIT/Molecules/PrimaryButton";
import arrow from "../../../Libraries/payments.library/assets/icons/arrow/nonstraingt/SmallArrow.svg";
import Colors from "../../../constants/colors/index";
import {CheckBalance} from "../../../Pages/payments.pages/Home.page/styled";
import {
     useGetMeQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";
import BalanceBlock from "../../../Libraries/payments.library/Widgets/ballanceBlock";



const BalanceBlockComponent = () => {


    return (
        <>
            <BalanceBlock getMe={useGetMeQuery}/>
        </>
    );
};

export default BalanceBlockComponent;

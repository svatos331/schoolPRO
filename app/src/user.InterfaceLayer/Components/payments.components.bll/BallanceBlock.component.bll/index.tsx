import React from "react";
import {styled} from "styled-components";


import BallanceWidget from "../../../Libraries/payments.library/Widgets/ballanceWidget";
import PrimaryButton from "../../../Libraries/payments.library/UI_KIT/Molecules/PrimaryButton";
import arrow from "../../../Libraries/payments.library/assets/icons/arrow/nonstraingt/SmallArrow.svg";
import Colors from "../../../constants/colors/index";
import {CheckBalance} from "../../../Pages/payments.pages/Home.page/styled";


const Balance = styled.div`
//
//   -webkit-box-shadow: -1px 5px 22px 0px rgba(196, 196, 196, 1);
//   -moz-box-shadow: -1px 5px 22px 0px rgba(196, 196, 196, 1);
//   box-shadow: -1px 5px 22px 0px rgba(196, 196, 196, 1);
//   -webkit-border-radius: 78px 78px 0 0;
//   background-color: white;
//   -moz-border-radius: 50px;
//   border-radius: 50px;
//   z-index: 100;
//   width: 100%;
//   margin-top: calc(200px);
//   //background-color: white !important;
`;
const BalanceBlock = () => {
    return (
        <><Balance>
            <BallanceWidget/>
        </Balance>
            <CheckBalance>
                <PrimaryButton
                    width={"100%"}
                    text={"Check Your Account Ballance"}
                    hasIcon={true}
                    icon={arrow}
                    contentposition={"between"}/>
            </CheckBalance>
        </>
    );
};

export default BalanceBlock;

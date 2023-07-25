import React from "react";
import {styled} from "styled-components";


import {
     useGetMeQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";
import CardsBlock from "../../../Libraries/payments.library/Widgets/cardsBlock";
import PaymentBlock from "../../../Libraries/payments.library/Widgets/paymentBlock";



const PaymentBlockComponent = () => {


    return (
        <>
            <PaymentBlock getMe={useGetMeQuery}/>
        </>
    );
};

export default PaymentBlockComponent;

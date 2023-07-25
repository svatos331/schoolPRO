import React, {FC} from "react";

import * as ST from "./styled";
import {useAppDispatch} from "../../../../business.InterfaceLayer/store/services/hooks/redux";
import PaymentPageTitleWidget from "../../../Libraries/payments.library/Widgets/pageTitles/PaymentPage.titleWidget";

const PaymentPage: FC = () => {


    return (
        <ST.CardsPageWrapper>
            <PaymentPageTitleWidget/>
            <ST.Main>
                <CardsBlockComponent/>
            </ST.Main>
        </ST.CardsPageWrapper>
    );
};
export default PaymentPage;
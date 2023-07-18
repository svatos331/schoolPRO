import React, {FC} from "react";

import * as ST from "./styled";
import Typography_Montserrat_Normal
    from "../../../Libraries/payments.library/UI_KIT/Molecules/Typographies/Montserrat/Normal";
import EFontClasses from "../../../constants/fontsClasses";
import Typography_Montserrat_Bold
    from "../../../Libraries/payments.library/UI_KIT/Molecules/Typographies/Montserrat/Bold";
import arrow from "../../../Libraries/payments.library/assets/icons/arrow/nonstraingt/SmallArrow.svg";
import BallanceWidget from "../../../Libraries/payments.library/Widgets/ballanceWidget";
import PrimaryButton from "../../../Libraries/payments.library/UI_KIT/Molecules/PrimaryButton";

const HomePage :FC = () =>  {

    return (
        <ST.HomePageWrapper>

                <ST.Menu>
                    <h1>top</h1>
                </ST.Menu>
                <ST.Balance>
                    <BallanceWidget/>

                </ST.Balance>

            <ST.CheckBalance>
                <PrimaryButton width={"100%"} text={"Check Your Account Ballance"} hasIcon={true} icon={arrow} contentposition={"between"}/>

            </ST.CheckBalance>

        </ST.HomePageWrapper>
    );
};
export default HomePage;
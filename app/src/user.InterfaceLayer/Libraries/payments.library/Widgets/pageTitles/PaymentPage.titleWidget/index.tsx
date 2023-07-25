
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, startTransition} from "react";
import {useNavigate} from "react-router-dom";

import * as ST from "./styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ICardsPageTitleWidgetProps} from "./type";
import Button from "../../../UI_KIT/Atoms/Button";
import leftArraw from "../../../assets/icons/arrow/straght/Left-Arrow.svg";
import Typography_Montserrat_Normal from "../../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import Colors from "../../../../../constants/colors";
import EFontClasses from "../../../../../constants/fontsClasses";
import {IPaymentPageTitleWidgetDefaultProps} from "./const";
import IconElement from "../../../UI_KIT/Atoms/IconElement";
const PaymentPageTitleWidget :FC<ICardsPageTitleWidgetProps>= ({title}) => {
    const navigate = useNavigate();

    return (
        <ST.Menu>
            <ST.MenuHeader>
                <Button
                    onClick={() => {
                        startTransition(() => {
                            navigate("/");
                        });
                        // eslint-disable-next-line no-console
                    }}
                    hasIcon={true}
                    text={<IconElement style={{width:"15px"}} src={leftArraw}/>}

                />

            </ST.MenuHeader>
            <ST.MenuTitle>
                <Typography_Montserrat_Normal
                    color={Colors.WHITE}
                    className={EFontClasses.SecondaryTextPTSanBold15_18_413_900}
                    text={title??""}
                />

            </ST.MenuTitle>


        </ST.Menu>
    );
};
PaymentPageTitleWidget.defaultProps = IPaymentPageTitleWidgetDefaultProps;
export default PaymentPageTitleWidget;
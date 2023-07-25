import React, {FC, useState} from "react";
import {styled} from "styled-components";
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";

import * as ST from "./styled/index";
import {IPaymentBlockProps} from "./type";
import Typography_Montserrat_Normal from "../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import Colors from "../../../../constants/colors";
import EFontClasses from "../../../../constants/fontsClasses";


const PaymentBlock :FC<IPaymentBlockProps>= ({getMe}) => {

    const [sum, setSum] = useState<number>(() => 0|0);
    // eslint-disable-next-line no-console
    console.log(sum);

    return (
        <ST.PaymentBlock>
            <ST.Input>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*// @ts-ignore*/}
                <label htmlFor="urrency-us">
                    <Typography_Montserrat_Normal className={EFontClasses.SecondaryTextPTSanBold15_18_413_900} text={"Enter amount"} color = {Colors.BLUE}/>
                </label>
                <InputNumber  style={{border:"0 !important"}} maxFractionDigits={0} min={1} inputId="currency-us" value={sum|0} onValueChange={(e:InputNumberValueChangeEvent) => setSum(e?.value??0 | 0)} mode="currency" currency="USD" locale="en-US" />

            </ST.Input>
            <ST.TOUser>
                <Typography_Montserrat_Normal className={EFontClasses.SecondaryText14_16_413_900} color={Colors.BLUE} text={"To"}/>
            </ST.TOUser>
            <ST.Keyboard>
                2
            </ST.Keyboard>
        </ST.PaymentBlock>
    );
};

export default PaymentBlock;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useEffect, useMemo, useState} from "react";
import {InputMask, InputMaskChangeEvent} from "primereact/inputmask";
import {useStorage} from "primereact/hooks";

import * as ST from "./styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IVerifierWidgetProps} from "./type/IVerifierWidgetProps";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IVerifierWidgetPropsDefault, TypingPhoneText, WaitingCodeText} from "./const";
import Typography_PTSan_Normal from "../../UI_KIT/Molecules/Typographies/PTsan/Normal";
import PrimaryButton from "../../UI_KIT/Molecules/PrimaryButton";
import Colors from "../../../../constants/colors";
import EFontClasses from "../../../../constants/fontsClasses";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VerifierWidget :FC<IVerifierWidgetProps>= ({setIsWaiting,isLockedSubmitBtn, isWaitingCode}) => {
    const [phone, setPhone] = useState<string>(() => {
        return localStorage.getItem("phone")||"+";
    });
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const curDesText = useMemo(() => {
        // eslint-disable-next-line no-console

        return isWaitingCode?WaitingCodeText:TypingPhoneText;
    }, [isWaitingCode]);
    useEffect(() => {
        localStorage.setItem("phone", phone);
    }, [phone]);

    useEffect(() => {
        setPhone(
            localStorage.getItem("phone")??"+"
        );
    }, [phone]);

    return (<ST.VerifierWidgetWrapper>
        <ST.Header>
            <Typography_PTSan_Normal text={curDesText(phone)}/>
        </ST.Header>
        <ST.InputCard className="card">
                <label htmlFor="phoneInput" className="lbl">
                    <Typography_PTSan_Normal color={Colors.GRAY} className={EFontClasses.SecondaryTextPTSanBold15_18_413_900} text={"Enter your Number"}/>
                </label>
                <InputMask className={EFontClasses.MainTextPTSanBold19_21_413_900} style={{border:0}} name="phoneInput" value={phone} onChange={(e:InputMaskChangeEvent) => setPhone(e?.target?.value??"")} mask={"+7(999) 999 99 99"}  maxLength={16}   prefix={"+"} />
        </ST.InputCard>
        <PrimaryButton
            onClick={() => {
                if(phone.length === 17){
                    setIsWaiting(true);
                }
            }}
            contentposition={"row-center"}
            width={"100%"}
            text={"Get OTP"}
        />



    </ST.VerifierWidgetWrapper>);
};
VerifierWidget.defaultProps = IVerifierWidgetPropsDefault;
export default VerifierWidget;
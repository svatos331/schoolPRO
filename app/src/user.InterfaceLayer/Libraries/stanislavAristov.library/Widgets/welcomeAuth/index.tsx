
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import rArraw from "../../assets/icons/arrow/straght/Right-Arrow.svg";
import rArrawBlue from "../../assets/icons/arrow/straght/Right-Arrow-Blue.svg";
import PrimaryButton from "../../UI_KIT/Molecules/PrimaryButton";
import SecondaryButton from "../../UI_KIT/Molecules/SecondaryButton";
import * as ST from "./styled";
const WelcomeAuth :FC= () => {
    return (<ST.WelcomeAuthWrapper>
        <PrimaryButton
            contentposition={"between"}
            hasIcon={true}
            icon={rArraw}
            width={"100%"}
            text={"Sign In"}
            onClick={() => {
                // eslint-disable-next-line no-console
                console.log(1);
            }}
        />

        <SecondaryButton
            contentposition={"between"}
            hasIcon={true}
            icon={rArrawBlue}
            width={"100%"}
            text={"Sign Up"}
            onClick={() => {
                // eslint-disable-next-line no-console
                console.log(1);
            }}
        />

    </ST.WelcomeAuthWrapper>);
};
export default WelcomeAuth;
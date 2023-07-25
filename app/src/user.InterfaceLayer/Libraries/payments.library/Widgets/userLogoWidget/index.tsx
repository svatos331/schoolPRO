import React, {FC} from "react";

import * as ST from "./styled/index";
import {IPaymentBlockProps} from "./type";
import UserLogo from "../../UI_KIT/Molecules/UserLogo";
import Typography_PTSan_Normal from "../../UI_KIT/Molecules/Typographies/PTsan/Normal";
import EFontClasses from "../../../../constants/fontsClasses";



const UserLogoWidget: FC<IPaymentBlockProps> = ({getMe}) => {
    const {data, isLoading} = getMe({});

    return (
        <ST.UserLogoWidget>
            <UserLogo isLoading = {isLoading} image={data?.src??undefined}/>
            <Typography_PTSan_Normal text={data?.name??""} className={EFontClasses.SecondaryTextPTSanBold15_18_413_900}/>
        </ST.UserLogoWidget>
    );
};

export default UserLogoWidget;

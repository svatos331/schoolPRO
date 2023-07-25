
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {QueryDefinition} from "@reduxjs/toolkit/query";

import * as ST from "./styled";
import Typography_Montserrat_Bold from "../../../../UI_KIT/Molecules/Typographies/Montserrat/Bold";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IBallanceWidgetPropsDefault} from "./const";
import Typography_Montserrat_Normal from "../../../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import EFontClasses from "../../../../../../constants/fontsClasses";
import Colors from "../../../../../../constants/colors";
import IconElement from "../../../../UI_KIT/Atoms/IconElement";
import diagram from "../../../../assets/icons/mainIcon/ballanceDiagram.svg";
import {
    IUserDTO
} from "../../../../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/services/dto/from.dto";

const BalanceWidget :FC<{ getMe: UseQuery<QueryDefinition<any, any, any, IUserDTO>> }>= ({getMe}) => {
    const {data:userData} = getMe({});

    return (<ST.BallanceWidgetWrapper>
        <ST.Info className="d-f">
            <ST.Left>
                <Typography_Montserrat_Normal
                    className={EFontClasses.MainTextMont24_28_413_900}
                    text={"Your total balance"}
                />
                <Typography_Montserrat_Bold
                    color={Colors.DARKAQUA}
                    className={EFontClasses.MainTextMont30_45_413_900}
                    text={"$"+userData?.balance||"____"}
                />
            </ST.Left>
            <ST.Right>
                ...
            </ST.Right>

        </ST.Info>
        <ST.Diagram>
            <IconElement src={diagram}/>

        </ST.Diagram>

    </ST.BallanceWidgetWrapper>);
};
export default BalanceWidget;
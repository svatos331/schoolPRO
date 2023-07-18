
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import * as ST from "../styled/index";
import Typography_Montserrat_Bold from "../../../UI_KIT/Molecules/Typographies/Montserrat/Bold";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IBallanceWidgetPropsDefault} from "../const";
import Typography_Montserrat_Normal from "../../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import EFontClasses from "../../../../../constants/fontsClasses";
import Colors from "../../../../../constants/colors";
import IconElement from "../../../UI_KIT/Atoms/IconElement";
import diagram from "../../../assets/icons/mainIcon/ballanceDiagram.svg";
const BallanceWidget :FC= () => {
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
                    text={"$8500.00"}
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
BallanceWidget.defaultProps = IBallanceWidgetPropsDefault;
export default BallanceWidget;
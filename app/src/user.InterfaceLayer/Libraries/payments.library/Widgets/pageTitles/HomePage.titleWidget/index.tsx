
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import * as ST from "./styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IHomePageTitleWidgetProps} from "./type";
import Button from "../../../UI_KIT/Atoms/Button";
import IconElement from "../../../UI_KIT/Atoms/IconElement";
import menuLogo from "../../../assets/icons/HamburgerMenu.svg";
import Typography_Montserrat_Normal from "../../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import Colors from "../../../../../constants/colors";
import EFontClasses from "../../../../../constants/fontsClasses";
import UserLogo from "../../../UI_KIT/Molecules/UserLogo";
const HomePageTitleWidget :FC<IHomePageTitleWidgetProps>= ({openFunc, getMe}) => {
    const {data:user, isLoading} = getMe({});

    return (
        <ST.Menu>
            <ST.MenuHeader>
                <Button
                    onClick={() => {
                        // eslint-disable-next-line no-console
                        openFunc();
                    }}
                    hasIcon={true}
                    icon={menuLogo}

                />
                <UserLogo image = {user?.src??undefined} isLoading = {isLoading}/>

            </ST.MenuHeader>
            <ST.MenuTitle>
                <Typography_Montserrat_Normal
                    color={Colors.WHITE}
                    className={EFontClasses.MainTextMont24_28_413_900}
                    text={"Good morning"}
                />
                <Typography_Montserrat_Normal
                    color={Colors.WHITE}
                    className={EFontClasses.MainTextMont24_28_413_900}
                    text={`${user?.id ?? 0},`}
                />
            </ST.MenuTitle>

        </ST.Menu>
    );
};
export default HomePageTitleWidget;
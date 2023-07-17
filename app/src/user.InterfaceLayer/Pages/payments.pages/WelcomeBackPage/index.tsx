import React, {FC} from "react";

import * as ST from "./styled";
import LogoWhite from "../../../Libraries/payments.library/UI_KIT/Molecules/LogoWhite";
import {
    AbsolutePosElement
} from "../../../Libraries/payments.library/UI_KIT/Atoms/AbsolutePosElement/component";
import svgMain from "../../../Libraries/payments.library/assets/icons/gradient/Shapes.svg";
import Typography from "../../../Libraries/payments.library/UI_KIT/Atoms/Typograpgy/component";
import Colors from "../../../constants/colors";
import EFontClasses from "../../../constants/fontsClasses";
import Button from "../../../Libraries/payments.library/UI_KIT/Atoms/Button";

const WelcomeBackPage: FC = () =>
    (<ST.WelcomeBackPage>
        <ST.AbsoluteBlock className = "absoluteBlock">
            <AbsolutePosElement position="absolute" top="0" left="0">
                <ST.GradientImg src={svgMain} alt="svg"/>
            </AbsolutePosElement>
        </ST.AbsoluteBlock>
        <AbsolutePosElement position={"absolute"} top={"0"} left={"0"}>
            <ST.LogoBlock>
                <ST.Logo>
                    <LogoWhite/>
                </ST.Logo>
                <ST.Typography>
                    <Typography
                        family={"'Montserrat', serif"}
                        weight={"normal"}
                        as="p"
                        color={Colors.WHITE}
                        className={EFontClasses.MainTextMont30_45_413_900}
                    >
                        Welcome
                    </Typography>
                    <Typography
                        family={"'Montserrat', serif"}
                        weight={"normal"}
                        as="p"
                        color={Colors.WHITE}
                        className={EFontClasses.MainTextMont30_45_413_900}
                    >
                        Back
                    </Typography>
                </ST.Typography>
            </ST.LogoBlock>

        </AbsolutePosElement>
        <Button>
            d
        </Button>

    </ST.WelcomeBackPage>);

export default WelcomeBackPage;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as ST from "./styled";
import LogoWhite from "../LogoWhite";
import Colors from "../../../constants/colors";
import {AbsolutePosElement} from "../../Atoms/AbsolutePosElement/component";
import Typography_Montserrat_Normal from "../Typographies/Montserrat/Normal";

const AbsoluteAuthBlock :FC= () => {
    return (
        <AbsolutePosElement position={"absolute"} top={"0"} left={"0"}>
            <ST.LogoBlock>
                <ST.Logo>
                    <LogoWhite/>
                </ST.Logo>
                <ST.Typography>
                    <Typography_Montserrat_Normal as={"p"} text={"Welcome"} color={Colors.WHITE}/>
                    <Typography_Montserrat_Normal as={"p"} text={"Back"} color={Colors.WHITE}/>
                </ST.Typography>
            </ST.LogoBlock>

        </AbsolutePosElement>
    );
};
export default AbsoluteAuthBlock;
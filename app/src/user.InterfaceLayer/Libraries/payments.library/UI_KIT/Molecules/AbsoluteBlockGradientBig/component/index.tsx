// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import {AbsolutePosElement} from "../../../Atoms/AbsolutePosElement/component";
import * as ST from "../styled/index";
import svgMain from "../../../../assets/icons/gradient/Shapes.svg";

const AbsoluteBlockGradientBig :FC = () => {
    return (
        <ST.AbsoluteBlock  minh = {"500px"} maxh = {"600px"} className="absoluteBlock">
            <AbsolutePosElement position="absolute" top="0" left="0">
                <ST.GradientImg src={svgMain} alt="svg"/>
            </AbsolutePosElement>
        </ST.AbsoluteBlock>
    );
};
export default AbsoluteBlockGradientBig;

import React, {FC} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from "styled-components";

import batteryBorder from "../../../../assets/icons/batteryBorder.svg";
import * as ST from "../styled/index";
import {IBatteryProps} from "../type";
import IconElement from "../../IconElement";


const Battery: FC<IBatteryProps> = ({charge=100}) => {


    return (
        <ST.BatteryWrapper>
            <IconElement src={batteryBorder} width="20px"/>
        </ST.BatteryWrapper>
    );
};
export default Battery;
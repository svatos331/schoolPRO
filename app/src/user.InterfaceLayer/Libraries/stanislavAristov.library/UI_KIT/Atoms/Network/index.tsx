import React, {FC} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from "styled-components";

import network3 from "../../../assets/icons/network.svg";
import network3Black from "../../../assets/icons/networkBlack.svg";
import * as ST from "./styled";
import {INetworkProps} from "./type";
import IconElement from "../IconElement";


const Network: FC<INetworkProps & {isDark?:boolean}> = ({lvl=100, isDark}) => {


    return (
        <ST.Network>
            <IconElement src={isDark?network3Black:network3} width="20px"/>
        </ST.Network>
    );
};
Network.defaultProps = {
    isDark:false
};
export default Network;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useMemo} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from "styled-components";

import wifi0 from "../../../../assets/icons/wifi/wifi0.svg";
import wifi1 from "../../../../assets/icons/wifi/wifi1.svg";
import wifi2 from "../../../../assets/icons/wifi/wifi2.svg";
import wifi3 from "../../../../assets/icons/wifi/wifi3.svg";
import * as ST from "../styled/index";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IWifiProps} from "../type";
import IconElement from "../../IconElement";


const WifiBar: FC<IWifiProps> = ({lvl = 1}) => {
    const wifiSrc = useMemo<string>(() => {
        return lvl === 1 ?
            wifi1 :
            lvl === 2 ?
                wifi2 :
                lvl === 3 ?
                    wifi3 : wifi0;
    }, [lvl]);

    return (
        <IconElement width={"20px"} src={wifiSrc}/>
    );
};
export default WifiBar;
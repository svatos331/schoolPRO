// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useMemo} from "react";

// import rArraw from "../../../assets/icons/arrow/straght/Right-Arrow.svg";
import * as ST from "./styled";
import {IDeviceDataWidgetPropsDefault} from "./const/DeviceDataWidgetPropsDefault";
import WifiBar from "../../UI_KIT/Atoms/WifiBar";
import Battery from "../../UI_KIT/Molecules/Battery";
import Network from "../../UI_KIT/Atoms/Network";
import Time from "../../UI_KIT/Atoms/Time";
import {useAppSelector} from "../../../../../business.InterfaceLayer/store/services/hooks/redux";
import Colors from "../../../../constants/colors";




// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DeviceDataWidget :FC= () => {
    const {curcolor} = useAppSelector(state => state.theme);
    const isDark = useMemo(() => {
        return curcolor === Colors.WHITE;
    }, [curcolor]);

    return (<ST.DeviceDataWidgetWrapper curcolor={curcolor}>
        <ST.Left>
           <Time isDark={isDark}/>
        </ST.Left>
       <ST.Right>
           <WifiBar lvl={3}/>
           <Battery charge={0}/>
           <Network lvl={3} isDark={true}/>
       </ST.Right>
    </ST.DeviceDataWidgetWrapper>);
};
DeviceDataWidget.defaultProps = IDeviceDataWidgetPropsDefault;
export default DeviceDataWidget;
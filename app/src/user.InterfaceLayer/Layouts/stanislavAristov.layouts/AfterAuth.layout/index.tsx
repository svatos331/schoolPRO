import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import * as ST from "./styled";
import DeviceDataWidget from "../../../Libraries/stanislavAristov.library/Widgets/deviceDataWidget";
import Colors from "../../../constants/colors/index";
import { useAppSelector } from "../../../../business.InterfaceLayer/store/services/hooks/redux";
import {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ITheme,
} from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/theme.entity/redux/slice";
import i18n from "../../../Components/StanislavAristov.components.bll/i18n";

const AfterAuthLayout: FC<{ children?: JSX.Element; bgc?: ITheme }> = ({
	bgc,
	children,
}) => {
	const { curcolor } = useAppSelector((state) => state.theme);

	// eslint-disable-next-line no-console
	console.log(curcolor);

	return (
		<ST.AfterAuthLayout
			bgc={bgc}
			curcolor={curcolor}
		>
			<DeviceDataWidget />
			<main>{children ? children : <Outlet />}</main>
		</ST.AfterAuthLayout>
	);
};

export default AfterAuthLayout;

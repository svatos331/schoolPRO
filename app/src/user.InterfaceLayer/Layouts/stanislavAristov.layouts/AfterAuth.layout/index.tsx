import React, { FC, startTransition, useTransition } from "react";
import { Outlet } from "react-router-dom";

import * as ST from "./styled";
import DeviceDataWidget from "../../../Libraries/stanislavAristov.library/Widgets/deviceDataWidget";
import Colors from "../../../constants/colors/index";
import { useAppSelector } from "../../../../business.InterfaceLayer/store/services/hooks/redux";
import {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ITheme,
} from "../../../../business.InterfaceLayer/store/shared/entities/aristovStanislav.entities/theme.entity/redux/slice";

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

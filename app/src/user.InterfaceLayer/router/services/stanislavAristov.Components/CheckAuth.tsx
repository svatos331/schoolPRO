import React, { startTransition, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch } from "../../../../business.InterfaceLayer/store/services/hooks/redux";
import { themeActions } from "../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/theme.entity/redux/slice";
import Colors from "../../../constants/colors/index";

const CheckAuth = () => {
	const dispath = useAppDispatch();
	const { changeTheme } = themeActions;
	useEffect(() => {
		startTransition(() => {
			if (window.location.href.includes("auth")) {
				if (window.location.href.includes("creatingProfile")) {
					dispath(changeTheme(Colors.BLUE_THEME_GRADIENT));
				} else {
					dispath(changeTheme(Colors.WHITE));
				}
			} else if (
				window.location.href.includes("notifications") ||
				window.location.href.includes("profile") ||
				window.location.href.includes("onboarding")
			) {
				dispath(changeTheme(Colors.WHITE));
			} else {
				// eslint-disable-next-line no-console
				console.log(1);
				dispath(changeTheme(Colors.BLUE_THEME_GRADIENT));
			}
		});
	}, [changeTheme]);

	return <Outlet />;
};
export default CheckAuth;

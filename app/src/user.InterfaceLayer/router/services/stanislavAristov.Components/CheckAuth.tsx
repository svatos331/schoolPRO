import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Keycloak from "keycloak-js";

const keycloakSetting = {
	url: process.env.REACT_APP_KEYCLOAK_URL ?? "",
	realm: process.env.REACT_APP_KEYCLOAK_REALM ?? "",
	clientId: process.env.REACT_APP_KEYCLOAK_CLIENTID ?? "",
};

const initOptions = { pkceMethod: "S256", onLoad: "login-required" };

const CheckAuth = () => {
	useEffect(() => {
		const keycloak = new Keycloak(keycloakSetting);
		keycloak
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			.init(initOptions)
			.then((authenticated) => {
				if (authenticated) {
					// eslint-disable-next-line no-console
					console.log("User is authenticated.");
					localStorage.setItem("auth", JSON.stringify(keycloak.token)); // Сохраняем токен в localStorage
				} else {
					// eslint-disable-next-line no-console
					console.log("User is not authenticated.");
				}
			})
			.catch((error) => {
				console.error("Error initializing Keycloak:", error);
			});
	}, []);

	// const dispath = useAppDispatch();
	// const { changeTheme } = themeActions;
	// useEffect(() => {
	// 	startTransition(() => {
	// 		if (window.location.href.includes("auth")) {
	// 			if (window.location.href.includes("creatingProfile")) {
	// 				dispath(changeTheme(Colors.BLUE_THEME_GRADIENT));
	// 			} else {
	// 				dispath(changeTheme(Colors.WHITE));
	// 			}
	// 		} else if (
	// 			window.location.href.includes("notifications") ||
	// 			window.location.href.includes("profile") ||
	// 			window.location.href.includes("onboarding")
	// 		) {
	// 			dispath(changeTheme(Colors.WHITE));
	// 		} else {
	// 			// eslint-disable-next-line no-console
	// 			console.log(1);
	// 			dispath(changeTheme(Colors.BLUE_THEME_GRADIENT));
	// 		}
	// 	});
	// }, [changeTheme]);
	return <Outlet />;
};

export default CheckAuth;

import React, { FC, ReactNode } from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "keycloak-js";

import LaunchScreenPage from "../../../Pages/AristovStanislav.pages/LaunchScreen.page";
const keycloakSetting = {
	url: process.env.REACT_APP_KEYCLOAK_URL ?? "",
	realm: process.env.REACT_APP_KEYCLOAK_REALM ?? "",
	clientId: process.env.REACT_APP_KEYCLOAK_CLIENTID ?? "",
};
//в general с готовымыи конфигами
const keycloak = new Keycloak(keycloakSetting);
const initOptions = { pkceMethod: "S256", onLoad: "login-required" };
const handleOnEvent = async (event: any, error: any) => {
	if (event === "onAuthSuccess" || event === "onAuthRefreshSuccess") {
		// eslint-disable-next-line no-console
		localStorage.setItem("auth", JSON.stringify(keycloak.token));
		// eslint-disable-next-line no-console
		console.log("refreshed");
	}
};
export const KKProvider: FC<{ children: JSX.Element | ReactNode }> = ({
	children,
}) => {
	return (
		<ReactKeycloakProvider
			authClient={keycloak}
			initOptions={initOptions}
			LoadingComponent={<LaunchScreenPage />}
			onEvent={(event, error) => handleOnEvent(event, error)}
		>
			{children}
		</ReactKeycloakProvider>
	);
};
export default KKProvider;

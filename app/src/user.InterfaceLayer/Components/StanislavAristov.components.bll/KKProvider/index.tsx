import React, { FC, ReactNode, Suspense } from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "keycloak-js";

import LaunchScreenPage from "../../../Pages/AristovStanislav.pages/LaunchScreen.page";
import Loader from "../../general.components/Loader";
const keycloakSetting = {
	url: process.env.REACT_APP_KEYCLOAK_URL ?? "",
	realm: process.env.REACT_APP_KEYCLOAK_REALM ?? "",
	clientId: process.env.REACT_APP_KEYCLOAK_CLIENTID ?? "",
};
const isAristovStanislavRoute =
	window.location.href.includes("/stanislavAristov");
//в general с готовымыи конфигами
const keycloak = new Keycloak(keycloakSetting);
const initOptions = {
	pkceMethod: "S256",
	onLoad: isAristovStanislavRoute ? "login-required" : null,
};
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
	const content = isAristovStanislavRoute ? (
		<ReactKeycloakProvider
			authClient={keycloak}
			initOptions={initOptions}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			LoadingComponent={isAristovStanislavRoute ? <LaunchScreenPage /> : null}
			onEvent={(event, error) => handleOnEvent(event, error)}
		>
			{children}
		</ReactKeycloakProvider>
	) : (
		<>{children}</>
	);

	return isAristovStanislavRoute ? (
		<Suspense fallback={<Loader />}>{content}</Suspense>
	) : (
		content
	);
};
export default KKProvider;

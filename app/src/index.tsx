import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Keycloak from "keycloak-js";
import { ReactKeycloakProvider } from "@react-keycloak/web";

// eslint-disable-next-line import/order
import ToasterModalWindow from "./user.InterfaceLayer/Components/general.components/ModalWindows/Toaster.modalWindow";

import "./user.InterfaceLayer/styles/global.scss";
import "user.InterfaceLayer/styles/default.css";
import "user.InterfaceLayer/styles/global.scss";
import "user.InterfaceLayer/styles/scrollbar.css";
import "user.InterfaceLayer/styles/fonts.scss";
import "primereact/resources/primereact.min.css";
import LaunchScreenPage from "./user.InterfaceLayer/Pages/AristovStanislav.pages/LaunchScreen.page";
import { store } from "./business.InterfaceLayer/store";
import mainRouter from "./user.InterfaceLayer/router";
import KKProvider from "./user.InterfaceLayer/Components/general.components/KKProvider";
const element = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(element);
const routers = createBrowserRouter(mainRouter);
const keycloakSetting = {
	url: "https://keycloak.yamakassi.ru",
	realm: "claimapi",
	clientId: "claimapi",
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

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routers} />
		</Provider>
		<ToasterModalWindow>
			<Toaster
				position="bottom-left"
				reverseOrder={false}
			/>
		</ToasterModalWindow>
	</React.StrictMode>
);

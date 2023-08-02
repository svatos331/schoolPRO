import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// eslint-disable-next-line import/order
import { Toaster } from "react-hot-toast";

// eslint-disable-next-line import/order
import { I18nextProvider } from "react-i18next";
// eslint-disable-next-line import/order
import ToasterModalWindow from "./user.InterfaceLayer/Components/general.components/ModalWindows/Toaster.modalWindow";

import "./user.InterfaceLayer/styles/global.scss";
import "user.InterfaceLayer/styles/default.css";
import "user.InterfaceLayer/styles/global.scss";
import "user.InterfaceLayer/styles/scrollbar.css";
import "user.InterfaceLayer/styles/fonts.scss";
import "primereact/resources/primereact.min.css";
import { store } from "./business.InterfaceLayer/store";
import mainRouter from "./user.InterfaceLayer/router";
import KKProvider from "./user.InterfaceLayer/Components/general.components/KKProvider";
const element = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(element);
const routers = createBrowserRouter(mainRouter);

//в general с готовымыи конфигами

root.render(
	<KKProvider>
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
	</KKProvider>
);

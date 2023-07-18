import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Keycloak from "keycloak-js";
import {ReactKeycloakProvider, useKeycloak} from "@react-keycloak/web";

import {store} from "./business.InterfaceLayer/store";
import mainRouter from "./user.InterfaceLayer/router";
// eslint-disable-next-line import/order
import ToasterModalWindow from "./user.InterfaceLayer/Components/general.components/ModalWindows/Toaster.modalWindow";

import "./user.InterfaceLayer/styles/global.scss";
import "user.InterfaceLayer/styles/default.css";
import "user.InterfaceLayer/styles/global.scss";
import "user.InterfaceLayer/styles/scrollbar.css";
import "user.InterfaceLayer/styles/fonts.scss";
// import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/primereact.min.css";
import LaunchScreenPage from "./user.InterfaceLayer/Pages/payments.pages/LaunchScreen.page";
const element = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(element);
const routers = createBrowserRouter(mainRouter);
const keycloakSetting = {
    url: "https://keycloak.yamakassi.ru",
    realm: "claimapi",
    clientId: "claimapi"
};
const keycloak = new Keycloak(keycloakSetting);
const initOptions = { pkceMethod: "S256", onLoad:"login-required" };
const loadingComponent = (
    <div className='text-blue-700' />
);

const handleOnEvent = async (event: any, error:any) => {
    if (event === "onAuthSuccess") {
        // eslint-disable-next-line no-console
        console.log(keycloak.authenticated);
        // eslint-disable-next-line no-console
        console.log(keycloak.token);
        // if (keycloak.authenticated) {
        //     let response = await chatApi.getUserExtrasMe(keycloak.token);
        //     if (response.status === 404) {
        //         const userExtra = { avatar: keycloak.tokenParsed!.preferred_username }
        //         response = await chatApi.saveUserExtrasMe(keycloak.token, userExtra)
        //         console.log('UserExtra created for ' + keycloak.tokenParsed!.preferred_username)
        //     }
        //     //@ts-ignore
        //     keycloak['avatar'] = response.data.avatar
        }
    };

root.render(
    <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={initOptions}
        LoadingComponent={<LaunchScreenPage/>}
        onEvent={(event, error) => handleOnEvent(event, error)}
    >


        <Provider store={store}>

                <RouterProvider router={routers}/>
        </Provider>
        <ToasterModalWindow>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
        </ToasterModalWindow>

     </ReactKeycloakProvider>

);

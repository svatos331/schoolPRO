import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";

import {useAppDispatch} from "../../../../business.InterfaceLayer/store/services/hooks/redux";
import {
    themeActions
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/theme.entity/redux/slice";
import Colors from "../../../constants/colors/index";

const CheckAuth = () => {
    // const {keycloak} = useKeycloak();
    const navigate = useNavigate();
    const dispath = useAppDispatch();
    const {changeTheme} = themeActions;
    useEffect(() => {
        if(window.location.href.includes("auth")){
            if(window.location.href.includes("creatingProfile")){
                dispath(changeTheme(Colors.BLUE_THEME_GRADIENT));

            }else {
                dispath(changeTheme(Colors.WHITE));

            }
        }else if(window.location.href.includes("notifications") || window.location.href.includes("profile") || window.location.href.includes("onboarding")){
            dispath(changeTheme(Colors.WHITE));

        }else {
            // eslint-disable-next-line no-console
            console.log(1);
            dispath(changeTheme(Colors.BLUE_THEME_GRADIENT));
        }
    }, [changeTheme]);


    // const { token: authTokenParams } = useParams();
    // const authTokenFromLocalStorage = checkAuth();
    // const navigate = useNavigate();
    //
    // const { status, data } = useGetUserInfoQuery(
    // 	authTokenParams ?? authTokenFromLocalStorage ?? ""
    // );
    //
    // const dispatch = useAppDispatch();
    // const auth = useAppSelector((state) => state.auth);
    // const setLogin = (data: IAuthUserState) => {
    // 	dispatch(authActions.login(data));
    // };
    //
    // useEffect(() => {
    // 	status === QueryStatus.fulfilled && setLogin(data ?? initialAuthState);
    // }, [status]);
    //
    // useEffect(() => {
    // 	authTokenParams &&
    // 		auth.id &&
    // 		navigate(
    // 			routeBuilder(getUrlByRoleService(getMainRoleService(auth.role)))
    // 		);
    // }, [auth.id]);
    //
    // return auth.id ? <Outlet /> : <div>Initialization</div>;
    return (
        <div>

            <Outlet/>
        </div>
    );
};
export default CheckAuth;

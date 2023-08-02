// eslint-disable-next-line import/order
import React, { FunctionComponent, useState } from "react";

import ModuleSignIn from "./modules/ModuleSignIn";
import ModuleSignUp from "./modules/ModuleSignUp";
import { WidgetSignInType } from "./type";
import * as ST from "./styled";
import { TitleSiteAuth } from "../../UI_KIT/Atoms/TitleSiteAuth";
import { store } from "../../../../../business.InterfaceLayer/store";
import { userSlice } from "../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";

const WidgetSignIn: FunctionComponent<WidgetSignInType> = ({
	useAddUserMutation,
	useLazyGetUserQuery,
}) => {
	const [isSignIn, setIsSignIn] = useState(true);
	store.dispatch(userSlice.actions.undefined());

	return (
		<ST.bg_div>
			<TitleSiteAuth />
			{isSignIn ? (
				<ModuleSignIn
					setIsSignIn={setIsSignIn}
					useLazyGetUserQuery={useLazyGetUserQuery}
				/>
			) : (
				<ModuleSignUp
					useAddUserMutation={useAddUserMutation}
					setIsSignIn={setIsSignIn}
				/>
			)}
		</ST.bg_div>
	);
};

export default WidgetSignIn;

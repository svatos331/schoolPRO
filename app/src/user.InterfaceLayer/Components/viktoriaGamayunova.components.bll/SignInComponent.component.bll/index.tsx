import React from "react";

import {
	useAddUserMutation,
	useLazyGetUserQuery,
} from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/api";
import WidgetSignIn from "../../../Libraries/viktoriaGamayunova.library/Widgets/WidgetSignIn";

const SignInComponent = () => {
	return (
		<WidgetSignIn
			useAddUserMutation={useAddUserMutation}
			useLazyGetUserQuery={useLazyGetUserQuery}
		/>
	);
};

export default SignInComponent;

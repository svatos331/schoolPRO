import React from "react";

import { useGetUserQuery } from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/api";
import Widget2 from "../../../Libraries/viktoriaGamayunova.library/Widgets/widget2";

// import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/todo.entity/redux/api";
// import Widget1 from "../../../Libraries/viktoriaGamayunova.library/Widgets/widget1";

const SignInComponent = () => {
	return (
		<>
			<div>SignIn Component:</div>
			<Widget2 useGetUserQuery={useGetUserQuery} />
		</>
	);
};

export default SignInComponent;

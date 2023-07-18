import React from "react";

import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/todo.entity/redux/api";
import Widget1 from "../../../Libraries/viktoriaGamayunova.library/Widgets/widget1";
// import Widget2 from "../../../Libraries/viktoriaGamayunova.library/Widgets/widget2";
// import { useGetUserQuery } from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/api";

const Component1 = () => {
	return (
		<>
			<Widget1 useGetTodoQuery={useGetTodoQuery} />
			{/*<Widget2 useGetUserQuery={useGetUserQuery} />{" "}*/}
		</>
	);
};

export default Component1;

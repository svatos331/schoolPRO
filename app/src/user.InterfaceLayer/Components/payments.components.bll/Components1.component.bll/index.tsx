import React from "react";

import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import Widget1 from "../../../Libraries/stanislavAristov.library/Widgets/widget1";

const Component1 = () => {
	return <Widget1 useGetTodoQuery={useGetTodoQuery} />;
};

export default Component1;

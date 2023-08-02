import React, { FunctionComponent } from "react";

import Widget1Type from "./type";

const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
	const { data } = useGetTodoQuery({ params: { id: "1" } });
	// eslint-disable-next-line no-console
	console.log(data);

	return (
		<>
			<div>data from jsonplaceholder : {JSON.stringify(data)}</div>
		</>
	);
};

export default Widget1;

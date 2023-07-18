import React, { FunctionComponent } from "react";

// import Widget1Type from "./type";
import { Widget2Type } from "./type";

const Widget2: FunctionComponent<Widget2Type> = ({ useGetUserQuery }) => {
	// тут передавать значения из инпутов ???
	const { data } = useGetUserQuery({
		authToken: "",
		params: { email: "some@mail.ru", pass: "pass" },
	});
	const { data_uncorrect } = useGetUserQuery({
		authToken: "",
		params: { email: "someeee@mail.ru", pass: "pass" },
	});

	return (
		<>
			<div>correct user info : {JSON.stringify(data)}</div>
			<div>uncorrect user info : {JSON.stringify(data_uncorrect)}</div>
		</>
	);
};

export default Widget2;

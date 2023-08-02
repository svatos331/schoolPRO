import React, { FunctionComponent } from "react";

// import Widget1Type from "./type";
import { Widget2Type } from "./type";
import {
	useAddUserMutation,
	useGetAllUserQuery,
	// useGetUserByIdQuery,
} from "../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/api";
import { store } from "../../../../../business.InterfaceLayer/store";
import { userSlice } from "../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";

const Widget2: FunctionComponent<Widget2Type> = ({ useGetUserQuery }) => {
	const { data } = useGetUserQuery({
		params: { email: "some@mail.ru", pass: "pass" },
	});
	const all_data = useGetAllUserQuery().data;
	const { data_uncorrect } = useGetUserQuery({
		authToken: "",
		params: { email: "someeee@mail.ru", pass: "pass" },
	});
	// const data_id = useGetUserByIdQuery({
	// 	params: { id: store.getState().user },
	// }).data;

	const add_user = () => {
		const obj = {
			email: "111",
			password: "222",
			firstname: "fn",
			lastname: "ln",
			userType: 0,
			avatar: "",
			phone: "",
			username: "",
			bio: "",
		};
		add(obj);
	};
	const [add] = useAddUserMutation();

	const show_user = () => {
		store.dispatch(userSlice.actions.setUser(1));
		// eslint-disable-next-line no-console
		console.log(store.getState().user);
	};

	return (
		<>
			<div>correct user info : {JSON.stringify(data)}</div>
			<div>uncorrect user info : {JSON.stringify(data_uncorrect)}</div>
			<div>all user info : {JSON.stringify(all_data)}</div>
			{/*<div>user 1 : {JSON.stringify(data_id)}</div>*/}
			<button onClick={add_user}>add</button>
			<button onClick={show_user}>show</button>
		</>
	);
};

export default Widget2;

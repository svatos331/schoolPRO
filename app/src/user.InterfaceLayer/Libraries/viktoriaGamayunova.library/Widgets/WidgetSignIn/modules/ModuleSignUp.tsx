import React, { FunctionComponent, useState } from "react";

import { ModuleSignUpType } from "../type";
// import { store } from "../../../../../../business.InterfaceLayer/store";
// import { userSlice } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import * as ST from "../styled";
import { InputSign } from "../../../UI_KIT/Atoms/InputSign";
import { BtnSign } from "../../../UI_KIT/Atoms/BtnSign";
import { InputSignName } from "../../../UI_KIT/Atoms/InputSignName";
import { InputRadio } from "../../../UI_KIT/Atoms/InputUserType";
//json-server -w db_task1.json -p 4000
const ModuleSignUp: FunctionComponent<ModuleSignUpType> = ({
	useAddUserMutation,
	setIsSignIn,
}) => {
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
		firstname: "",
		lastname: "",
		userType: 0,
		avatar: "",
		phone: "",
		username: "",
		bio: "",
	});

	const editUserInfo = (prop: any, event: { target: { value: string } }) => {
		setUserInfo({ ...userInfo, ...{ [prop]: event.target.value } });
	};

	const [checked, setChecked] = useState(true);
	const changeRadio = (event: { target: { value: number } }) => {
		setChecked((prevState) => !prevState);
		setUserInfo({ ...userInfo, ...{ ["userType"]: event.target.value } });
	};

	const handlerSignIn = () => {
		setIsSignIn(true);
		setUserInfo({
			email: "",
			password: "",
			firstname: "",
			lastname: "",
			userType: 0,
			avatar: "",
			phone: "",
			username: "",
			bio: "",
		});
	};
	const [add] = useAddUserMutation();
	const handlerSignUp = () => {
		add(userInfo);
		setIsSignIn(true);
	};

	return (
		<>
			<ST.divContent>
				<ST.form>
					<ST.pSignIn>Sign Up</ST.pSignIn>
					<ST.p>I am...</ST.p>
					<InputRadio
						type={"radio"}
						name={"radioUserType"}
						value={1}
						id={"r1"}
						checked={!checked}
						onChange={changeRadio}
					/>
					<label htmlFor="r1">User</label>
					<InputRadio
						type={"radio"}
						name={"radioUserType"}
						value={0}
						id={"r0"}
						checked={checked}
						onChange={changeRadio}
					/>
					<label htmlFor="r0">Influencer</label>
					<ST.divName>
						<InputSignName
							type={"text"}
							placeholder={"first name"}
							onChange={(e: any) => editUserInfo("firstname", e)}
							value={userInfo.firstname}
						/>
						<InputSignName
							type={"text"}
							placeholder={"last name"}
							onChange={(e: any) => editUserInfo("lastname", e)}
							value={userInfo.lastname}
						/>
					</ST.divName>
					<InputSign
						type={"text"}
						placeholder={"email"}
						onChange={(e: any) => editUserInfo("email", e)}
						value={userInfo.email}
					/>
					<InputSign
						type={"password"}
						placeholder={"password"}
						onChange={(e: any) => editUserInfo("password", e)}
						value={userInfo.password}
					/>
					<BtnSign
						type="button"
						text="Continue"
						onClick={handlerSignUp}
					/>
					<ST.pCenter>have an account?</ST.pCenter>
					<BtnSign
						type="button"
						text="Sign In"
						onClick={handlerSignIn}
					/>
				</ST.form>
			</ST.divContent>
		</>
	);
	// return (
	// 	<>
	// 		<button onClick={add_user}>add</button>
	// 		<button onClick={show_user}>show</button>
	// 	</>
	// );
};

export default ModuleSignUp;

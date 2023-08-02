import React, { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";

import * as ST from "../styled/index";
import { ModuleUpdateAreaType } from "../type";
import { BtnUpdPass } from "../../../UI_KIT/Atoms/BtnUpdPass";
import {
	IUserEnum,
	userActions,
} from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import { InputUpd } from "../../../UI_KIT/Atoms/InputUpd";
import { useAppSelector } from "../../../../../../business.InterfaceLayer/store/services/hooks/redux";

const ModuleUpdateArea: FunctionComponent<ModuleUpdateAreaType> = ({
	useUpdateUserMutation,
}) => {
	const [upd] = useUpdateUserMutation();
	const dispatch = useDispatch();
	const selector = useAppSelector((state) => state.user);
	const [password, setPassword] = useState("");
	const [passwordAgain, setPasswordAgain] = useState("");
	const handlerUpdate = () => {
		setPassword("");
		setPasswordAgain("");
		if (password == passwordAgain) {
			upd({
				id: selector[IUserEnum.id],
				password: password,
			});
			dispatch(userActions.setPassword(password));
			alert("Passwords changed");
		} else {
			alert("Passwords are different");
		}
	};

	return (
		<ST.divPass>
			<InputUpd
				type={"text"}
				placeholder={"New password"}
				onChange={(e: any) => setPassword(e.target.value)}
				value={password}
			/>
			<InputUpd
				type={"text"}
				placeholder={"Enter password again"}
				onChange={(e: any) => setPasswordAgain(e.target.value)}
				value={passwordAgain}
			/>
			<BtnUpdPass
				type={"button"}
				text={"Change Password"}
				onClick={handlerUpdate}
			/>
		</ST.divPass>
	);
};

export default ModuleUpdateArea;

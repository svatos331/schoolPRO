import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import * as ST from "../styled/index";
import { ModuleUpdateType } from "../type";
import { InputUpd } from "../../../UI_KIT/Atoms/InputUpd";
import { BtnsUpdResetMolecule } from "../../../UI_KIT/Molecules/BtnsUpdReset.molecule";
import { TxtArea } from "../../../UI_KIT/Atoms/TxtArea";
import { Line } from "../../../UI_KIT/Atoms/Line";
import { Avatar } from "../../../UI_KIT/Atoms/Avatar";
import { useAppSelector } from "../../../../../../business.InterfaceLayer/store/services/hooks/redux";
import { userActions } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import avatar from "../../../assets/icons/avatar.svg";

const ModuleUpdateArea: FunctionComponent<ModuleUpdateType> = ({
	useUpdateUserMutation,
}) => {
	const dispatch = useDispatch();
	const selector = useAppSelector((state) => state.user);
	const [upd_db] = useUpdateUserMutation();
	const [userInfo, setUserInfo] = useState(selector);

	useEffect(() => {
		setUserInfo(selector);
	}, [selector]);

	const resetFields = () => {
		setUserInfo(selector);
	};
	const editUserInfo = (prop: any, event: any) => {
		setUserInfo({ ...userInfo, ...{ [prop]: event.target.value } });
	};
	const update = () => {
		upd_db(userInfo);
		dispatch(userActions.setUser(userInfo));
		alert("Updated!");
	};

	return (
		<>
			<ST.divInfo>
				<ST.divField>
					<ST.Label>Your Profile Picture</ST.Label>
					<InputUpd
						type={"text"}
						placeholder={"Enter URL of picture"}
						onChange={(e: any) => editUserInfo("avatar", e)}
						value={userInfo.avatar}
					/>
				</ST.divField>
				<Avatar
					src={userInfo.avatar != "" ? userInfo.avatar : avatar}
					alt=""
					width="128px"
					height="128px"
				/>
				<Line />
				<ST.divField>
					<ST.Label>First Name</ST.Label>
					<InputUpd
						type={"text"}
						placeholder={""}
						onChange={(e: any) => editUserInfo("firstname", e)}
						value={userInfo.firstname}
					/>
				</ST.divField>
				<ST.divField>
					<ST.Label>Last Name</ST.Label>
					<InputUpd
						type={"text"}
						placeholder={""}
						onChange={(e: any) => editUserInfo("lastname", e)}
						value={userInfo.lastname}
					/>
				</ST.divField>
				<ST.divField>
					<ST.Label>Email</ST.Label>
					<InputUpd
						type={"text"}
						placeholder={""}
						onChange={(e: any) => editUserInfo("email", e)}
						value={userInfo.email}
					/>
				</ST.divField>
				<ST.divField>
					<ST.Label>Username</ST.Label>
					<InputUpd
						type={"text"}
						placeholder={""}
						onChange={(e: any) => editUserInfo("username", e)}
						value={userInfo.username}
					/>
				</ST.divField>
				<ST.divField>
					<ST.Label>Phone Number</ST.Label>
					<InputUpd
						type={"text"}
						placeholder={""}
						onChange={(e: any) => editUserInfo("phone", e)}
						value={userInfo.phone}
					/>
				</ST.divField>
			</ST.divInfo>
			<ST.divField>
				<ST.Label>Bio</ST.Label>
				<TxtArea
					placeholder={"Enter the description of store"}
					onChange={(e: any) => editUserInfo("bio", e)}
					value={userInfo.bio}
				/>
			</ST.divField>

			<BtnsUpdResetMolecule
				type={"button"}
				textUpd={"Update Profile"}
				textReset={"Reset"}
				onClickReset={resetFields}
				onClickUpd={update}
			/>
		</>
	);
};

export default ModuleUpdateArea;

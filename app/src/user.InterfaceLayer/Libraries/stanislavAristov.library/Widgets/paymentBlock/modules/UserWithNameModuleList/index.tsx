// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, JSX, ReactNode, useEffect, useMemo } from "react";

import UserWithName from "./modules/UserWithName";
// eslint-disable-next-line import/order
import { IUserWithNameWidgetProps } from "./type";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import * as ST from "./styled";
import { IBaseInfoUserDTO } from "../../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/userBaseInfo.entity/services/dto/from.dto";
import { useAppDispatch } from "../../../../../../../business.InterfaceLayer/store/services/hooks/redux";
import { paymentsActions } from "../../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/redux/slice";

const UsersWithNameModuleList: FC<IUserWithNameWidgetProps> = ({
	getMe,
	getAllUsers,
}) => {
	const dispatch = useAppDispatch();

	const { changeSelectedUserId } = paymentsActions;

	// const selectedUserId = useAppSelector(state => state.svyatoslavZhilnRoutesPaths.selectedUserId);
	const { data: users = [], isLoading: isLoadingAll } = getAllUsers({});
	const {
		data: me = { name: "", src: "" } as IBaseInfoUserDTO,
		isLoading: isLoadingMe,
	} = getMe({});
	const usersElements: ReactNode = useMemo(() => {
		// eslint-disable-next-line no-console
		console.log("render");

		if (isLoadingAll) {
			return [];
		}
		let arr: ReactNode[] = [];
		arr = users.map((user) => {
			if (user.name === me.name) {
				return (
					<UserWithName
						key={me.id}
						src={me.src}
						name={"YourSelf"}
						id={me.id}
						// isSelected={selectedUserId === me.id}
						setSelected={() => {
							dispatch(changeSelectedUserId(me.id));
						}}
					/>
				);
			}

			return (
				<UserWithName
					// isSelected={selectedUserId === user.id}
					key={user.id}
					{...user}
					setSelected={() => {
						dispatch(changeSelectedUserId(user.id));
					}}
				/>
			);
		});
		if (arr.length === 0) {
			arr.push(
				<UserWithName
					key={me.id}
					src={me.src}
					name={"YourSelf"}
					id={me.id}
					// isSelected={selectedUserId === me.id}
					setSelected={() => {
						dispatch(changeSelectedUserId(me.id));
					}}
				/>
			);
		}

		return arr as ReactNode;
	}, [users, isLoadingMe, isLoadingAll]);

	// return <KeyBoardItem src={user?.src??undefined} name={data?.name??""}/>;
	return <ST.UserWithNameWidgetList>{usersElements}</ST.UserWithNameWidgetList>;
};
export default UsersWithNameModuleList;

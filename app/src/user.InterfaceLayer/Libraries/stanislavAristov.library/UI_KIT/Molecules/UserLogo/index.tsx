// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, useMemo } from "react";
import { Avatar } from "primereact/avatar";
import { ProgressSpinner } from "primereact/progressspinner";

import ava from "../../../assets/icons/ava.svg";
import { IUserLogoProps } from "./type";

const UserLogo: FC<IUserLogoProps> = ({ image, isLoading }) => {
	return !isLoading ? (
		<Avatar
			style={!image ? { border: "1px solid black" } : {}}
			image={image ? image : ava}
			size="xlarge"
			shape="circle"
		/>
	) : (
		<ProgressSpinner />
	);
};
UserLogo.defaultProps = {
	isLoading: false,
};
export default UserLogo;

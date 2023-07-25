// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import UserWithName from "../../UI_KIT/Molecules/UserWithName";
import {IUserWithNameWidgetProps} from "./type";
// eslint-disable-next-line @typescript-eslint/no-unused-vars



const UserWithNameWidget: FC<IUserWithNameWidgetProps> = ({getBalance}) => {

    const {data} = getBalance({});

    return <UserWithName name={data?.id??""}/>;
};
export default UserWithNameWidget;
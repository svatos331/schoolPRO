// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";
import {Avatar} from "primereact/avatar";

import ava from "../../../assets/icons/ava.svg";
import * as ST from "../../../../../Pages/payments.pages/Home.page/styled";

const UserLogo :FC = () => {
    return (
        <ST.Logo>
            <Avatar image={ava} size="xlarge" shape="circle" />
        </ST.Logo>
    );
};

export default UserLogo;

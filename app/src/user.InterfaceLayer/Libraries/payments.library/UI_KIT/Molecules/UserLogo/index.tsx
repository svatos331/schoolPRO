// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";
import {Avatar} from "primereact/avatar";

import ava from "../../../assets/icons/ava.svg";

const UserLogo :FC<{ image? : string }> = ({image}) => {
    return (
            <Avatar style={!image?{border:"1px solid black"}:{}} image={image?image:ava} size="xlarge" shape="circle" />
    );
};

export default UserLogo;

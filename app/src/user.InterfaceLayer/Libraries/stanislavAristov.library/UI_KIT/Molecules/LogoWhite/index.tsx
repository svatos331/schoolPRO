// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import logo from "../../../assets/icons/logo/whitelogo.svg";
import IconElement from "../../Atoms/IconElement";

const LogoWhite :FC = () => {
    return (
            <IconElement
                src={logo}
            />
    );
};

export default LogoWhite;

import React, { memo } from "react";
import { Link } from "react-router-dom";

import * as ST from "./style/style";
import { NavItemProps } from "./type/index";



const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
    const {link, text} = props;

    return (
        <ST.NavItem>
            <Link to={link}>
                {text}
            </Link>
        </ST.NavItem>
    );
};

export default memo(NavItem);
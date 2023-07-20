import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Logo";
import { NavItem } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/NavItem";
import { headerRoute } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Header/const";

import * as ST from "./style/style";

export const Header: React.FC = () => {

    return (
        <ST.Header>
            <Link to={"/artemLeskin/"}>
                <Logo/>
            </Link>
            <ST.NavItems>
                {headerRoute.map(({link, text}) => <NavItem key={link} text={text} link={link}/>)}
            </ST.NavItems>
        </ST.Header>
    );
};
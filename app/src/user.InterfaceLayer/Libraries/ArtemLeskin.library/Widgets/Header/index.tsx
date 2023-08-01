import React, { memo } from "react";
import { Link } from "react-router-dom";
import Logo from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Logo";
import NavItem from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/NavItem";
import { headerRoute } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Header/const";
import { HeaderI } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Header/type";

import { ReactComponent as Burger } from "../../assets/icons/Burger.svg";
import * as ST from "./style/style";


const Header: React.FC<HeaderI> = (props: HeaderI) => {
    const {changeActive} = props;

    return (
        <ST.Header>
            <Link to={"/artemLeskin/"}>
                <Logo/>
            </Link>
            <ST.NavItems>
                {headerRoute.map(({link, text}) => <NavItem key={link} text={text} link={link}/>)}
            </ST.NavItems>
            <ST.Btn onClick={changeActive}>
                <Burger/>
            </ST.Btn>
        </ST.Header>
    );
};

export default memo(Header);
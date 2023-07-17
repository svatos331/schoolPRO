import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Logo";
import { NavItem } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/NavItem";
import { headerRoute } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Header/const";

import cls from "./style/Header.module.css";

export const Header: React.FC = () => {

    return (
        <div className={cls.header}>
            <Link to={"/artemLeskin/"}>
                <Logo/>
            </Link>
            <div className={cls.navItems}>
                {headerRoute.map(({link, text}) => <NavItem key={link} text={text} link={link}/>)}
            </div>
        </div>
    );
};
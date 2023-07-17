import React from "react";
import { Link } from "react-router-dom";

import cls from "./style/NavItem.module.css";

interface NavItemProps {
    link: string;
    text: string;
}

export const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
    const {link, text} = props;

    return (
        <Link to={link} className={cls.navItem}>
            {text}
        </Link>
    );
};
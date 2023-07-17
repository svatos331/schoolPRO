import React from "react";

import cls from "./style/Logo.module.css";

// interface indexProps {
//     className?: string;
// }

export const Logo: React.FC = () => {

    return (
        <div className={cls.logo}>
            KINO<span className={cls.blue}>MORE</span>
        </div>
    );
};
import React from "react";
import { SearchModule } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/SearchPanel/modules/SearchModule";
import SortModule from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/SearchPanel/modules/SortModule";

import cls from "./style/SearchPanel.module.css";


export const SearchPanel: React.FC = () => {

    return (
        <div className={cls.SearchPanel}>
            <SearchModule/>
            <SortModule/>
        </div>
    );
};
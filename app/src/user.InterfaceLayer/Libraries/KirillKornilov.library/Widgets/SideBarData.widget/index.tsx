import React from "react";

import { Icons } from "../../UI_KIT/Atoms/Atom1/icons";
import SidebarDataItem from "../../UI_KIT/Molecules/SidebarDataItem.molecule";
import "./styled/style.css";

const WidgetSideBarData= () => {

	return (
        <div>
            <h2 className="data-name">Категории</h2>
            <div className="data-items">
                <SidebarDataItem text="Дом" color="#000" icon={Icons.House}/>
                <SidebarDataItem text="Семья" color="#000" icon={Icons.Family}/>
                <SidebarDataItem text="Работа" color="#000" icon={Icons.Job}/>
                <SidebarDataItem text="Спорт" color="#000" icon={Icons.Sport}/>
                <SidebarDataItem text="Добавить" color="#29A19C" icon={Icons.ReactPlus}/>
            </div>
        </div>
    );
};

export default WidgetSideBarData;

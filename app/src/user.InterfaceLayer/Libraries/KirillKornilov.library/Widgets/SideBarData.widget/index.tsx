import React from "react";

import Logo from "../../UI_KIT/Molecules/Logo.molecule";
import { Icons } from "../../UI_KIT/Atoms/Atom1/icons";
import SidebarDataItem from "../../UI_KIT/Molecules/SidebarDataItem.molecule";
import * as S from "./styled";

const SidebarDataWidget= () => {

	return (

    <S.side_bar_box>
		<Logo/>
		 <>
            <S.data_name >Категории</S.data_name>
            <S.data_items>
                <SidebarDataItem text="Дом" color="#000" icon={Icons.House}/>
                <SidebarDataItem text="Семья" color="#000" icon={Icons.Family}/>
                <SidebarDataItem text="Работа" color="#000" icon={Icons.Job}/>
                <SidebarDataItem text="Спорт" color="#000" icon={Icons.Sport}/>
                <SidebarDataItem text="Добавить" color="#29A19C" icon={Icons.ReactPlus}/>
            </S.data_items>
        </>
        <>
            <S.data_name >Категории</S.data_name>
            <S.data_items>
                <SidebarDataItem text="Дом" color="#000" icon={Icons.House}/>
                <SidebarDataItem text="Семья" color="#000" icon={Icons.Family}/>
                 <SidebarDataItem text="Добавить" color="#29A19C" icon={Icons.ReactPlus}/>
            </S.data_items>
        </>
			<S.exit>
				<SidebarDataItem text="Выйти" color="#000" icon={Icons.Exit}/>

			</S.exit>
		</S.side_bar_box>
     


    );
};

export default SidebarDataWidget;

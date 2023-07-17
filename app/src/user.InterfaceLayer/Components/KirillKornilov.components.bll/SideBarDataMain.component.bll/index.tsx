import React from "react";
import Logo from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Logo.molecule";
import WidgetSideBarData from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/SideBarData.widget";
import SidebarDataItem from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/SidebarDataItem.molecule";
import { Icons } from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Atom1/icons";

import "./style.css";

const ComponentSideBarMain = () => {
	//return <Widget1 useGetTodoQuery={useGetTodoQuery} />;

	return 	(

		<div id="side-bar-box">
		<Logo/>
		<WidgetSideBarData/>
		{/* <WidgetSideBarData/> */}
			<div id="exit">
				<SidebarDataItem text="Выйти" color="#000" icon={Icons.Exit}/>

			</div>
		</div>
	);

};

export default ComponentSideBarMain;

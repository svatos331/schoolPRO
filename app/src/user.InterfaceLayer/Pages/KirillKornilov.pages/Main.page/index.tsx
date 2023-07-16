import React, { FC } from "react";
import ComponentSideBarMain from "user.InterfaceLayer/Components/KirillKornilov.components.bll/SideBarDataMain.component.bll";
//import Component1 from "../../../Components/KirillKornilov.components.bll/Components1.component.bll";
// import { Component1 } from "test-lib";
import MainHeader from "user.InterfaceLayer/Components/KirillKornilov.components.bll/HeaderMain.component.bll";

import "./style.css";

const MainPage: FC = () => {
	// eslint-disable-next-line no-console
	// console.log(Component1);

	return 	(

			<>
				<ComponentSideBarMain/>
				<div id='main-page'><MainHeader/></div>
				
			</>

			);
};

export default MainPage;


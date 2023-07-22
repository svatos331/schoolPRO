import { useGetGoodsQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
//import Task from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Task.molecule";
//import CardDataOptions from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/CardDataOptions.molecule";
//import {  FC } from "react";
//import dataContextWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Data.widget";
//import { useContext } from "react";
// import Logo from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Logo.molecule";
// import WidgetSideBarData from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/SideBarData.widget";
// import SidebarDataItem from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/SidebarDataItem.molecule";
// import { Icons } from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Atom1/icons";
//import TaskWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Task.widget";
import TaskWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Task.widget";


const CompComplexTask = () => {


	return 	(
		<TaskWidget useGetTodoQuery={useGetGoodsQuery}/>
	);

};

export default CompComplexTask;

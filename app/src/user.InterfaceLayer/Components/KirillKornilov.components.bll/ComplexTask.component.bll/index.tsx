import { useGetGoodsQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import "./style.css";
import Task from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Task.molecule";
import CardDataOptions from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/CardDataOptions.molecule";
//import {  FC } from "react";
//import dataContextWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Data.widget";
//import { useContext } from "react";
// import Logo from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Logo.molecule";
// import WidgetSideBarData from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/SideBarData.widget";
// import SidebarDataItem from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/SidebarDataItem.molecule";
// import { Icons } from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Atom1/icons";
//import TaskWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Task.widget";



const CompComplexTask = () => {

	const {data , isLoading} = useGetGoodsQuery(["ddd","dddf"]);

		if(isLoading)return <h1>LOading..</h1>;

	///const context = useContext(dataContextWidget);

	//return <Widget1 useGetTodoQuery={useGetTodoQuery} />;

	

	return 	(
		// <TaskWidget data={context.goods[id]=1}/>

<> 
<CardDataOptions title="Активные задачи" >
	<div className="column-card">						
	{data.map((user:any) => {
		return user["categories"].map((category:any) => {
			return category["tasks"].map((task:any) => 
			{
				if (!task["isComplete"])
				return<Task key={task["id"]} text={task["task"]} completed={task["isComplete"]}/>;
			});
		});
	})}
	</div>
</CardDataOptions>
<CardDataOptions title="Завершённые задачи" >
<div className="column-card">			
	{data.map((user:any) => {
		return user["categories"].map((category:any) => {
			return category["tasks"].map((task:any) => 
			{
				if (task["isComplete"])
				return<Task key={task["id"]} text={task["task"]} completed={task["isComplete"]}/>;
			});
		});
	})}
</div>
</CardDataOptions>
</>

	);

};

export default CompComplexTask;

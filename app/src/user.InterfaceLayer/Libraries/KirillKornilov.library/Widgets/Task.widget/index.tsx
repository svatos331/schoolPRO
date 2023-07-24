import React, { FC , useContext} from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import TaskWidgetType from "./type";
import { UserCategory } from "../Main.widget";
import Task from "../../UI_KIT/Molecules/Task.molecule";
import CardDataOptions from "../../UI_KIT/Molecules/CardDataOptions.molecule";

// 	return <data from jsonplaceholder : {JSON.stringify(data)}
// 			<Icon width={20} height={20} color="#FAFAFA" icon={Icons.House}  />


export const TaskWidget: FC<TaskWidgetType> = ({useGetTasksQuery}) => {
	// const { useGetTodoQuery } = props;
	//const {query} 


	const { data , isLoading} = useGetTasksQuery({user_id: useContext(UserIdContext),category_id:useContext(UserCategory)});

	if(isLoading)return <h1>Loading..</h1>;
	//alert(`taskwidget ${data[0]["goal"]}`);

	return <> 
	<CardDataOptions title="Активные задачи" >
		<div className="column-card">	
		{data.map((task:any)=>{
			 if(!task["is_completed"])
			 return <Task key={task["id"]} text={task["goal"]} completed={task["is_completed"]}/>;
		})}					
		{/* {data.map((user:any) => {
			return user["goal"].map((category:any) => {
				return category["tasks"].map((task:any) => 
				{
					if (!task["isComplete"])
					return<Task key={task["id"]} text={task["task"]} completed={task["isComplete"]}/>;
				});
			});
		})} */}
		</div>
	</CardDataOptions>
	<CardDataOptions title="Завершённые задачи" >
	<div className="column-card">
	{data.map((task:any)=>{
			 if(task["is_completed"])
			 return <Task key={task["id"]} text={task["goal"]} completed={task["is_completed"]}/>;
		})}				
		{/* {data.map((user:any) => {
			return user["categories"].map((category:any) => {
				return category["tasks"].map((task:any) => 
				{
					if (task["isComplete"])
					return<Task key={task["id"]} text={task["task"]} completed={task["isComplete"]}/>;
				});
			});
		})} */}
	</div>
	</CardDataOptions>
	</>;
};

export default TaskWidget;

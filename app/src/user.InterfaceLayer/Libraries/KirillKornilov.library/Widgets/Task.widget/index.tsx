import React, { FC } from "react";

import Task from "../../UI_KIT/Molecules/Task.molecule";
import TaskWidgetType from "./type";
import CardDataOptions from "../../UI_KIT/Molecules/CardDataOptions.molecule";

// 	return <data from jsonplaceholder : {JSON.stringify(data)}
// 			<Icon width={20} height={20} color="#FAFAFA" icon={Icons.House}  />


export const TaskWidget: FC<TaskWidgetType> = (props) => {
	const { useGetTodoQuery } = props;
	
	const { data , isLoading} = useGetTodoQuery();

	if(isLoading)return <h1>Loading..</h1>;


	return <> 
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
	</>;
};

export default TaskWidget;

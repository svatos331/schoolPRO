import React, { FC , useContext} from "react";
import { UserIdContext  } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import TaskWidgetType from "./type";
import { UserCategory  } from "../Main.widget";
import Task from "../../UI_KIT/Molecules/Task.molecule";
import CardDataOptions from "../../UI_KIT/Molecules/CardDataOptions.molecule";

export const TaskWidget: FC<TaskWidgetType> = ({useGetTasksQuery,useDeleteTasksMutation}) => {
	// const { useGetTodoQuery } = props;
	//const {query} 


	const { data , isLoading} = useGetTasksQuery({user_id: useContext(UserIdContext),category_id:useContext(UserCategory)});

	 // eslint-disable-next-line @typescript-eslint/no-unused-vars
	 const [deleteTask]=useDeleteTasksMutation();

	const handleDelete =async (id:number)=>{
		await deleteTask(id);
		alert(id);
	};

	if(isLoading)return <h1>Loading..</h1>;

	return <> 
	<CardDataOptions title="Активные задачи" >
		<div className="column-card">	
		{data.map((task:any)=>{
			 if(!task["is_completed"])
			 return <Task key={task["id"]} text={task["goal"]} completed={task["is_completed"]} handleDeleteTask={()=>handleDelete(Number(task["id"]))}/>;
		})}					
	
		</div>
	</CardDataOptions>
	<CardDataOptions title="Завершённые задачи" >
	<div className="column-card">
	{data.map((task:any)=>{
			 if(task["is_completed"])
			 return <Task key={task["id"]} text={task["goal"]} completed={task["is_completed"]} handleDeleteTask={()=>handleDelete(task["id"])}/>;
		})}				
	
	</div>
	</CardDataOptions>
	</>;
};

export default TaskWidget;

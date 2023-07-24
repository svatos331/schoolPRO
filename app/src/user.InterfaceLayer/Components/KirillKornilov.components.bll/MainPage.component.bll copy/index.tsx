import React , {createContext} from "react";
import MainWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Main.widget";
import { useGetGoodsQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetTodoQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/todo.entity/redux/api";
import { useGetCategoriesQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetTasksQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";

export const UserIdContext = createContext(0);


const ComponentMainPage = () => {
	
	return  <>
	<UserIdContext.Provider value={1}>
	<MainWidget 
	useGetGoodsQuery={useGetGoodsQuery} 
	useGetTodoQuery={useGetTodoQuery}  
	useGetCategoriesQuery={useGetCategoriesQuery} 
	useGetTasksQuery={useGetTasksQuery}/>;
	</UserIdContext.Provider>
	</>;
	
};

export default ComponentMainPage;

import React from "react";
import MainWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Main.widget";
import { useGetGoodsQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetTodoQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/todo.entity/redux/api";
const ComponentMainPage = () => {
	return <MainWidget useGetGoodsQuery={useGetGoodsQuery} useGetTodoQuery={useGetTodoQuery}/>;
};

export default ComponentMainPage;

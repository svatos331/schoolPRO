import React from "react";
// import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/todo.entity/redux/api";
// import Widget1 from "../../../Libraries/KirillKornilov.library/Widgets/widget1";
// import Button from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Button.molecule"; 
// import { Icons,Icon } from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Atom1/icons";
// import Avatar from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Avatar.Atom";
//import HeaderMain
import HeaderMainWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/HeaderMain.widget";
import { useGetGoodsQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetTodoQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/todo.entity/redux/api";


const HeaderMain = () => {

    return (
        <HeaderMainWidget useGetGoodsQuery={useGetGoodsQuery} useGetTodoQuery={useGetTodoQuery} />
    );
};

export default HeaderMain;
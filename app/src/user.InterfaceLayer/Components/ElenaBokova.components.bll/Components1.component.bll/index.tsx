import React from "react";


import Widget1 from "../../../Libraries/ElenaBokova.library/Widgets/widget1";
import {
    useGetTodoQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";

const Component1 = () => {
    return <Widget1 useGetTodoQuery={useGetTodoQuery} />;
};

export default Component1;
import React, { FunctionComponent} from "react";
//import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import Logo from "../../UI_KIT/Molecules/Logo.molecule";
import { Icons } from "../../UI_KIT/Atoms/Atom1/icons";
import SidebarDataItem from "../../UI_KIT/Molecules/SidebarDataItem.molecule";
import * as S from "./styled";
import SidebarDataWidgetType from "./type";

//const userId = useContext(UserIdContext);
//const SidebarDataWidget= () => {
const SidebarDataWidget: FunctionComponent<SidebarDataWidgetType>  =(props: SidebarDataWidgetType )=>{
    const {useGetCategoriesQuery} = props;

    //alert(userId);

    const {data , isLoading} = useGetCategoriesQuery(1);
    if (isLoading) return <h1>isLoading</h1>;


	return (<S.side_bar_box>
         

         {data.map((user:any) => {
            alert(`user_id=${user["user_id"]}  id=${user["id"]}`);
			//return <li key={user["category_id"]}>{user["goal"]}</li>;
					//return<Task key={task["id"]} text={task["task"]} completed={task["isComplete"]}/>;
				// user.map((item:any)=>{
                //         alert(item);
                // })
			
		})}
         
		<Logo/>
		 <>
            <S.data_name >Категории</S.data_name>
            <S.data_items>
                <SidebarDataItem key={1} text="Дом" color="#000" icon={Icons.House}/>
                <SidebarDataItem key={2}  text="Семья" color="#000" icon={Icons.Family}/>
                <SidebarDataItem key={3}  text="Работа" color="#000" icon={Icons.Job}/>
                <SidebarDataItem key={4} text="Спорт" color="#000" icon={Icons.Sport}/>

                {data.map((user:any) => {
                    if(user["id"]<4)return;
                <SidebarDataItem key={user["id"]} text={user["name"]} color="#000" icon={Icons.Star} />;
                //alert(`user_id=${user["user_id"]}  id=${user["id"]}`);
                
                

		        })}

                <SidebarDataItem text="Добавить" color="#29A19C" icon={Icons.ReactPlus}/>
                

                
            </S.data_items>
        </>
        
            {/* <S.data_name >Категории</S.data_name>
            <S.data_items>
                <SidebarDataItem text="Дом" color="#000" icon={Icons.House}/>
                <SidebarDataItem text="Семья" color="#000" icon={Icons.Family}/>
                 <SidebarDataItem text="Добавить" color="#29A19C" icon={Icons.ReactPlus}/>
            </S.data_items>
         */}
			<S.exit>
				<SidebarDataItem text="Выйти" color="#000" icon={Icons.Exit}/>

			</S.exit>
		</S.side_bar_box>
     


    );
};

export default SidebarDataWidget;

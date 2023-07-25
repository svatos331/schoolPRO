import React, { FunctionComponent, useContext} from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";
//import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import Logo from "../../UI_KIT/Molecules/Logo.molecule";
import { Icons } from "../../UI_KIT/Atoms/Atom1/icons";
import SidebarDataItem from "../../UI_KIT/Molecules/SidebarDataItem.molecule";
import * as S from "./styled";
import SidebarDataWidgetType from "./type";
import { UserCategory } from "../Main.widget";

//const userId = useContext(UserIdContext);
//const SidebarDataWidget= () => {
const SidebarDataWidget: FunctionComponent<SidebarDataWidgetType>  =({useGetCategoriesQuery, setCategory})=>{
    //const {useGetCategoriesQuery} = props;

    const userId= useContext(UserIdContext);
	//alert(userId);

    const userCategory = useContext(UserCategory);

    const {data , isLoading} = useGetCategoriesQuery(userId);
    if (isLoading) return <h1>isLoading</h1>;

    //const {setCategory}= props;

    

	return (<S.side_bar_box>


		<Logo/>
		 <>
            <S.data_name >Категории</S.data_name>
            <S.data_items>
                
               <div key={1}  onClick={()=>setCategory(1)}> 

               <SidebarDataItem text="Дом" color="#000" icon={Icons.House} active={userCategory==1?true:false} />
                </div>
                <div key={2} onClick={()=>setCategory(2)}> 
                <SidebarDataItem   text="Семья" color="#000" icon={Icons.Family} active={userCategory==2?true:false} />
                </div>
                <div key={3} onClick={()=>setCategory(3)}> 
                <SidebarDataItem   text="Работа" color="#000" icon={Icons.Job} active={userCategory==3?true:false} />
                </div>
                <div key={4} onClick={()=>setCategory(4)}> 
                <SidebarDataItem  text="Спорт" color="#000" icon={Icons.Sport} active={userCategory==4?true:false} />
                </div> 

                {data.map((user:any) => {
                    if(user["id"]<=4)return;

                    return   (<div key={user["id"]} onClick={()=>setCategory(user["id"])}> 
                    <SidebarDataItem text={user["name"]} color="#000" icon={Icons.Star} active={userCategory==user["id"]?true:false}/>
                    </div>);
                })}
              
                <SidebarDataItem text="Добавить" color="#29A19C" icon={Icons.ReactPlus} active={false} />
                

                
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
				<SidebarDataItem text="Выйти" color="#000" icon={Icons.Exit} active={false}/>

			</S.exit>
		</S.side_bar_box>
     


    );
};

export default SidebarDataWidget;

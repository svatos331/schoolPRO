import React, { FunctionComponent, useState , createContext} from "react";
//import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import MainWidgetType from "./type";
import SidebarDataWidget from "../SideBarData.widget";
import HeaderMainWidget from "../HeaderMain.widget";
import Card from "../../UI_KIT/Atoms/Card.Atom";
import CardDataOptions from "../../UI_KIT/Molecules/CardDataOptions.molecule";
import Activity from "../../UI_KIT/Molecules/Activity.molecule";
import TaskWidget from "../Task.widget";
import CardData from "../../UI_KIT/Atoms/CardData.Atom";
import DateTime from "../../UI_KIT/Molecules/DateTime.molecule";
import * as S from "./styled";
import ObserveWidget from "../Observe.widget";
import FactWidget from "../Fact.widget";
import GraphLineWidget from "../GraphLine.widget";
import ModalWindowWidget from "../ModalWindow.widget";

export const UserCategory = createContext(1);

const MainWidget: FunctionComponent<MainWidgetType> = ({ useGetCategoriesQuery, useGetGoodsQuery ,useGetTodoQuery, useGetTasksQuery,useGetObservationQuery,useGetFactQuery, useGetActivityQuery}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	//const { data } = useGetGoodsQuery();

	//const userId= useContext(UserIdContext);
	//alert(userId);
	

	
	const [category,setCategory] = useState(1);

	const [visible,setVisible] = useState(false);

	//alert(`Cater${category}`);
	
	return <>

	<UserCategory.Provider value={category}>

		<SidebarDataWidget useGetCategoriesQuery={useGetCategoriesQuery} setCategory={setCategory}/>
			<S.main_page>

				<HeaderMainWidget useGetGoodsQuery={useGetGoodsQuery} useGetTodoQuery={useGetTodoQuery} setVisible={setVisible} />
 
				<ModalWindowWidget useGetTodoQuery={useGetTodoQuery} useGetCategoriesQuery={useGetCategoriesQuery} visible={visible} setVisible={setVisible} />

				<S.columns>
					<S.left_column>

						<Card>
							<CardDataOptions title="Успехи за неделю">
								<Activity useGetActivityQuery={useGetActivityQuery}/>
							</CardDataOptions>
						</Card>

							<Card>
								<TaskWidget useGetTodoQuery={useGetGoodsQuery} useGetTasksQuery={useGetTasksQuery}/>
							</Card>

					</S.left_column>

					<S.right_column>
					<Card>
						<CardData title="Такс такс такс">
							<DateTime/>
						</CardData>
					</Card>
					<Card>
						<CardData title="Наблюдение">		

						<ObserveWidget  useGetObservationQuery={useGetObservationQuery}/>

						</CardData>
					</Card>
						<Card>
							<CardData title="Факт дня">
							<FactWidget useGetFactQuery={useGetFactQuery}/>

							
									
							</CardData>

						</Card>
						<Card>
						<CardData title="График успеваемости">
						<GraphLineWidget useGetActivityQuery={useGetActivityQuery}/>
						</CardData>
						</Card>
					</S.right_column>
				</S.columns>
			</S.main_page>
			</UserCategory.Provider>
			</>;

};

export default MainWidget;

import React, { FunctionComponent } from "react";

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


const MainWidget: FunctionComponent<MainWidgetType> = ({ useGetGoodsQuery ,useGetTodoQuery}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data } = useGetGoodsQuery();

	return <>
		<SidebarDataWidget/>
			<S.main_page>
				<HeaderMainWidget useGetGoodsQuery={useGetGoodsQuery} useGetTodoQuery={useGetTodoQuery} />
 
				<S.columns>
					<S.left_column>
						<Card>
							<CardDataOptions title="Успехи за неделю">
								<Activity/>
							</CardDataOptions>
						</Card>
							<Card>
								<TaskWidget useGetTodoQuery={useGetGoodsQuery}/>
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
									<p style={{margin:0}}>
										Больше всего задач вы <a href="#">создаете</a> в Понедельник<br/><br/>
										Больше всего задач вы завершаете во Вторник
									</p>		
						</CardData>
					</Card>
						<Card>
							<CardData title="Факт дня">
									<p style={{margin:0}}>
										Человек, который просыпается в 6 утра, по статистике,
										закрывает все задачи к 18:30 вечера. 
										Попробуем также :^| ?
									</p>
							</CardData>
						</Card>
					</S.right_column>
				</S.columns>
			</S.main_page>
			</>;

};

export default MainWidget;

import React, { FC } from "react";
import ComponentSideBarMain from "user.InterfaceLayer/Components/KirillKornilov.components.bll/SideBarDataMain.component.bll";
//import Component1 from "../../../Components/KirillKornilov.components.bll/Components1.component.bll";
// import { Component1 } from "test-lib";
//import Task from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Task.molecule";
import HeaderMain from "user.InterfaceLayer/Components/KirillKornilov.components.bll/HeaderMain.component.bll";
import Card from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Card.Atom";
import CardData from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/CardData.Atom";
import CardDataOptions from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/CardDataOptions.molecule";
import Activity from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Activity.molecule";
import CompComplexTask from "user.InterfaceLayer/Components/KirillKornilov.components.bll/ComplexTask.component.bll";
import DateTime from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/DateTime.molecule";
//import Component1 from "user.InterfaceLayer/Components/KirillKornilov.components.bll/Components1.component.bll";

import "./style.css";

//const fd = this.state; 

const MainPage: FC = () => {

	return 	(
			<>
			<ComponentSideBarMain/>
			
			<div id='main-page'>
				<HeaderMain/>
				<div className='columns'>
					<div className='left-column'>
					<>
						<Card>
							<>
							<CardDataOptions title="Успехи за неделю">
								<Activity/>
							</CardDataOptions>
							</>
						</Card>


						<Card>
						<>
							<CompComplexTask/>
						</>
						</Card>
					</>
					</div>
					<div className="right-column">
						<Card>

							<CardData title="Такс такс такс">
								<DateTime/>
							</CardData>

						</Card>
						
						<Card>
						<CardData title="Наблюдение">
								<>
									<p style={{margin:0}}>
										Больше всего задач вы <a href="#">создаете</a> в Понедельник<br/><br/>
										Больше всего задач вы завершаете во Вторник
									</p>
								</>
							</CardData>
						</Card>
							
						<Card>
							<>
							
							<CardData title="Факт дня">
								<>
									<p style={{margin:0}}>
										Человек, который просыпается в 6 утра, по статистике,
										закрывает все задачи к 18:30 вечера. 
										Попробуем также :^| ?
									</p>
								</>
							</CardData>
							</>
						</Card>
					</div>
				</div>
			</div>
			
			</>

			);
};

export default MainPage;


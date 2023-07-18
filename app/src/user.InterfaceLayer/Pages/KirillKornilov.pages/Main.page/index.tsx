import React, { FC } from "react";
import ComponentSideBarMain from "user.InterfaceLayer/Components/KirillKornilov.components.bll/SideBarDataMain.component.bll";
//import Component1 from "../../../Components/KirillKornilov.components.bll/Components1.component.bll";
// import { Component1 } from "test-lib";
//import Task from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Task.molecule";
import MainHeader from "user.InterfaceLayer/Components/KirillKornilov.components.bll/HeaderMain.component.bll";
import Card from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Card.Atom";
import CardData from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/CardData.Atom";
import CardDataOptions from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/CardDataOptions.molecule";
import Activity from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Activity.molecule";
import CompComplexTask from "user.InterfaceLayer/Components/KirillKornilov.components.bll/ComplexTask.component.bll";
//import Component1 from "user.InterfaceLayer/Components/KirillKornilov.components.bll/Components1.component.bll";

import "./style.css";

//const fd = this.state; 

const MainPage: FC = () => {




	return 	(

			<>
			
			<ComponentSideBarMain/>
			
			<div id='main-page'>
				<MainHeader/>
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

							{/* <CardDataOptions title="Активные задачи" >
								<div className="tasks-list">
									<Task text="Приготовить вкусный ужин" completed={false}/>
									<Task text="Устранить засор в раковине" completed={false}/>
									<Task text="Стирка белого белья" completed={false}/>
									<Task text="Разморозить холодильник" completed={false}/>

									 

									<CompComplexTask/>
								</div>	
							</CardDataOptions>
							<CardData title="Заверщённые задачи">
								<div className="tasks-list">
									<Task text="Полить цветы" completed={true}/>
									<Task text="Вызвать сантехника" completed={true}/>
								</div>
							</CardData> */}
							<CompComplexTask/>
						</>
						</Card>
					</>
					</div>
					<div className="right-column">
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


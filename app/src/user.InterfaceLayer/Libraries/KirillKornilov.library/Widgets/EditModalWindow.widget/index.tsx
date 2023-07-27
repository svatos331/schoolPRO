/* eslint-disable max-lines */
import React, { FunctionComponent, useContext, useState } from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import Button from "../../UI_KIT/Molecules/Button.molecule";
import { Icons, Icon } from "../../UI_KIT/Atoms/Atom1/icons";
import EditModalWindowWidgetType from "./type";
//import { UserCategory } from "../Main.widget";

import "./styled/style.css";

const EditModalWindowWidget: FunctionComponent<EditModalWindowWidgetType> = ({
	visible,
	setVisible,
	useGetCategoriesQuery,
	useEditTaskMutation,
	task,
	
}) => {

	alert(`ffff ${task["goal"]}`);

	const userId = useContext(UserIdContext);

	//alert(userId);
	const [value, setValue] = useState("2");
	const [valueCategory, setValueCategory] = useState("1");
	const [valueDate, setValueDate] = useState("");
	const [valueGoal, setValueGoal] = useState(task["goal"]);
	//const userCategory = useContext(UserCategory);

	const [editTask] = useEditTaskMutation();

	const { data, isLoading } = useGetCategoriesQuery(userId);

	if (isLoading) return <h1>isLoading</h1>;

	const handleEditTask = async () => {
		await editTask({
			id: task["id"],
			category_id: Number(valueCategory),
			user_id: Number(userId),
			goal: valueGoal,
			is_completed: false,
			deadline: `${valueDate}T00:00:00Z`,
			priority: Number(value),
		});

		// [{"id":1,"category_id":1,"user_id":1,"goal":"Полить цветы",
		// "is_completed":false,"deadline":"2002-05-11T00:00:00Z","priority":0}
	};

	//alert(data);

	return (
		<div
			className="modal-base"
			style={visible ? { display: "flex" } : { display: "none" }}
		>
			<div className="modal-window">
				<div className="modal-title">
					<p>Изменить задачу</p>
					
				</div>
				<div className="modal-task-name">
					<p>Что нужно сделать?</p>
					<input
						type="text"
						//value={valueGoal}
						value={task["goal"]}
						onChange={(e) => setValueGoal(e.target.value)}
					/>
				</div>
				<div className="modal-parameters">
					<div>
						<p>Категория</p>
						<select
							value={valueCategory}
							onChange={(e) => setValueCategory(e.target.value)}
						>

							{data.map((user: any) => {
								return (
									<option
										key={user["id"]}
										value={user["id"]}
									>
										{user["name"]}
									</option>
								);

								// (<div key={user["id"]} onClick={()=>setCategory(user["id"])}>
								// <SidebarDataItem text={user["name"]} color="#000" icon={Icons.Star} active={userCategory==user["id"]?true:false}/>
								// </div>);
							})}
						</select>
					</div>
					<div>
						<p>Когда?</p>

						<div className="sd-container">
							<input
								className="sd"
								type="date"
								name="selected_date"
								value={valueDate}
								onChange={(e) => setValueDate(e.target.value)}
							/>
							<span className="open-button">
								<button>
									<Icon
										width={18}
										height={18}
										color="#000"
										icon={Icons.Calendar}
									/>
								</button>
							</span>
						</div>
					</div>
					<div>
						<p>Приоритет задачи</p>
						<select
							value={value}
							onChange={(e) => setValue(e.target.value)}
						>
							<option value="1">Важный</option>
							<option value="2">Обычный</option>
							<option value="3">Неважный</option>
						</select>
					</div>
				</div>
				<div className="modal-buttons">
					<Button
						text="Отменить"
						color="#F05454"
						icon={false}
						onClick={() => setVisible({task:{},visible:false})}
					/>
					<div>
						<Button
							text="Применить"
							color="#29A19C"
							icon={false}
							onClick={handleEditTask}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditModalWindowWidget;

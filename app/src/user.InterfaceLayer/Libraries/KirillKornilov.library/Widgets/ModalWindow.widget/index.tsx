import React, { FunctionComponent } from "react";

import Button from "../../UI_KIT/Molecules/Button.molecule";
import {Icons , Icon } from "../../UI_KIT/Atoms/Atom1/icons";
import ModalWindowWidgetType from "./type";

import "./styled/style.css";

const ModalWindowWidget: FunctionComponent<ModalWindowWidgetType> = ({ useGetTodoQuery }) => {
	const {data} = useGetTodoQuery();
	alert(data);

		return (
			<div className="modal-base">
			<form className='modal-window'>
				<div className='modal-title'>
					<p>Добавить новую задачу</p>
					<select>
						<option value="" disabled selected>Выбрать шаблон</option>
						<option value="Template">Template</option>
					</select>
				</div>
				<div className='modal-task-name'>
					<p>Что нужно сделать?</p>
					<input type="text" />
				</div>
				<div className='modal-parameters'>
					<div>
						<p>Категория</p>
						<select>
							<option value="" disabled selected>Выбрать</option>
							<option value="Template">Template</option>
						</select>
					</div>
					<div>
						<p>Когда?</p>
						<div className="sd-container">
							<input className="sd" type="date" name="selected_date" />
							<span className="open-button">
								<button>
									<Icon width={18} height={18} color='#000' icon={Icons.Calendar} />
								</button>
							</span>
						</div>
					</div>
					<div>
						<p>Приоритет задачи</p>
						<select>
							<option value="" disabled selected>Выбрать</option>
							<option value="Template">Template</option>
						</select>
					</div>
				</div>
				<div className='modal-buttons'>
					<Button text='Отменить' color='#F05454' icon={false}/>
					<div>
						<Button text='Сохранить как шаблон' color='#29A19C' icon={false}/>
						<Button text='Добавить' color='#29A19C' icon={false}/>
					</div>
				</div>
			</form>
			</div>
		);
	};
	
	export default ModalWindowWidget;
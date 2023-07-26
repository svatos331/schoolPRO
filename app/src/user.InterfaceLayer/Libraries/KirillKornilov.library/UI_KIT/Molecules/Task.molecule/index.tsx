import { FC } from "react";

import { Icon, Icons } from "../../Atoms/Atom1/icons";
import * as S from "./styled";
import CheckBox from "../../Atoms/Checkbox.Atom";
//import "./styled/style.css";

interface ITask {
	key: React.Key;
	text: string;
	completed: boolean;
	handleDeleteTask?: any;
	handleToggle?:any;
}

const Task: FC<ITask> = ({ key, text, completed, handleDeleteTask ,handleToggle}) => {


	

	return (

		<S.task 
			onClick={handleToggle}
			key={key}
			complet={completed ? true : false}>
			<S.checkbox_box complet={completed ? true : false}>
				<CheckBox checked={completed ? true : false} />
			</S.checkbox_box>

			<p> {text}</p>
			<S.btn>
				<Icon
					width={18}
					height={18}
					icon={Icons.Edit}
					color="#000"
				/>
			</S.btn>
			<S.btn>
				<div onClick={handleDeleteTask}>
					<Icon
						width={18}
						height={18}
						icon={Icons.TrashBin}
						color="#F05454"
					/>
				</div>
			</S.btn>
		</S.task>
	);
};

export default Task;

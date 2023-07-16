import React from "react";

import Button from "../../UI_KIT/Molecules/Button.molecule";
import Media from "../../UI_KIT/Atoms/Media.Atom";
import "./styled/style.css";


// const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
// 	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

// 	return <div>data from jsonplaceholder : {JSON.stringify(data)}</div>;
// };

export const LogInForm =()=>{
	return(
		<div className="wrapper">
			<h4>Вход в аккаунт</h4>
			<input type="text" placeholder="E-mail" />
			<input type="text" placeholder="Пароль" />
			<Button text="Войти" color="#29A19C" icon={false}/>
			<p>Ещё нет аккаунта? <a href="#">Регистрация</a></p>
			<div className="division-box">
				<hr />
				<p>или</p>
				<hr />
			</div>
			<div className="media-box">
				<Media logo={require("../../assets/icons/twitter.png")} link="twitter.com"/>
			<Media logo={require("../../assets/icons/facebook.webp")} link="facebook.com"/>
			
				</div> 	 
				{/* KirillKornilov.library/assets/icons/avatar.png
			  KirillKornilov.library/Widgets/LogInForm.widget/index.tsx
					 KirillKornilov.library/UI_KIT/Atoms/Media.Atom/index.tsx */}

		</div>
	);
};

export default LogInForm;

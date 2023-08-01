import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import Button from "../../UI_KIT/Molecules/Button.molecule";
import Media from "../../UI_KIT/Atoms/Media.Atom";
import * as S from "./styled";
//import "./styled/style.css";


// const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
// 	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

// 	return <div>data from jsonplaceholder : {JSON.stringify(data)}</div>;
// };

export const LogInForm =()=>{
	const navigate = useNavigate();
	const onClickHandler=()=>navigate("/kirillKornilov/");
	const [valueEmail,setValueEmail] = useState("");
	const [valuePass, setValuePass] =useState("");



	return(
		<S.container>
			<S.wrapper>
				
				<h4>Вход в аккаунт</h4>
				<input value={valueEmail} onChange={(e)=>setValueEmail(e.target.value)} type="text" placeholder="E-mail" />
				<input value={valuePass} onChange={(e)=>setValuePass(e.target.value)} type="text" placeholder="Пароль" />
				
				{/* <Button onClick={()=>window.open("/kirillKornilov/")} text="Войти" color="#29A19C" icon={false}/>
				 */}

				<Button onClick={()=>onClickHandler()} text="Войти" color="#29A19C" icon={false}/>
					
				<p>Ещё нет аккаунта? <a href="#">Регистрация</a></p>
				<S.division_box>
					<hr />
					<p>или</p>
					<hr />
				</S.division_box>
				<S.media_box>
					<Media logo={require("../../assets/icons/twitter.png")} link="twitter.com"/>
				<Media logo={require("../../assets/icons/facebook.webp")} link="facebook.com"/>
				
					</S.media_box> 	 
					

			</S.wrapper>
		</S.container>
	);
};

export default LogInForm;

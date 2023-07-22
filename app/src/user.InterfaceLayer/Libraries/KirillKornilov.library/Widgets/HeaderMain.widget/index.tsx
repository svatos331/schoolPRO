import React, { FunctionComponent } from "react";
import Button from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Button.molecule"; 
import { Icons,Icon } from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Atom1/icons";
import Avatar from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Avatar.Atom";

import * as S from "./styled";
import HeaderMainType from "./type";


const HeaderMainWidget: FunctionComponent<HeaderMainType> = ({ useGetGoodsQuery ,useGetTodoQuery}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data } = useGetGoodsQuery();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data2 } = useGetTodoQuery();


	return   <S.main_header>
	<Button text='Новая задача' color='#29A19C' icon={true}/>
	<S.theme_button>
		<Icon width={24} height={24} color='#bbbcb9' icon={Icons.Moon}/>
	</S.theme_button>
	<S.user_card>
		<p>Хорошего дня, username</p>
		<Avatar img={require("../../assets/icons/avatar.png")} diameter={44}/>
		
		<S.toggle_button>
			&gt;
		</S.toggle_button>
	</S.user_card>
</S.main_header>;
};

export default HeaderMainWidget;

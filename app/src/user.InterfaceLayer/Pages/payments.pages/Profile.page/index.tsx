import React, { FC } from "react";

import * as ST from "./styled";
import Typography_Montserrat_Bold from "../../../Libraries/payments.library/UI_KIT/Molecules/Typographies/Montserrat/Bold";
import UserNameLogoComponent from "../../../Components/payments.components.bll/UserNameLogo.component.bll";
import CardsBlockComponent from "../../../Components/payments.components.bll/SignoutBtn.component.bll";
//page и component юзают только widgets
const ProfilePage: FC = () => {
	//яерез children моно прокидывать виджеты в виджет
	return (
		<ST.ProfilePageWrapper>
			<ST.Header>
				<Typography_Montserrat_Bold text={"Profile"} />
			</ST.Header>
			<ST.Main>
				<UserNameLogoComponent />
			</ST.Main>
			<ST.Footer>
				<CardsBlockComponent />
			</ST.Footer>
		</ST.ProfilePageWrapper>
	);
};
export default ProfilePage;

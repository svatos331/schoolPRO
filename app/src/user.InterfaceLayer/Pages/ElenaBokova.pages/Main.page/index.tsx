import React, { FC } from "react";

import Catalog from "../../../Components/ElenaBokova.components.bll/Catalog.component.bll";
import Title from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Title";
import {
	useGetUserQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/elenaBokova.entities/user.entity/redux/api";
import {StyledSection} from "./styled/styled";


const MainPage: FC = () => {

	return <StyledSection>
		<Title/>
		<Catalog useGetUserQuery={useGetUserQuery}/>
	</StyledSection>;
};

export default MainPage;


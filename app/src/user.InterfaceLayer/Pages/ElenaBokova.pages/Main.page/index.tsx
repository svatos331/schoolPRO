import React, { FC } from "react";

import Title from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Title";
import {StyledSection} from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/SectionWrapper/styled/styled";
import Catalog from "../../../Components/ElenaBokova.components.bll/Catalog.component.bll";


const MainPage: FC = () => {

	return <StyledSection>
		<Title/>
		<Catalog />
	</StyledSection>;
};

export default MainPage;


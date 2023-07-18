import React, { FC } from "react";

import Catalog from "../../../Components/ElenaBokova.components.bll/Catalog.component.bll";
import Title from "../../../Libraries/ElenaBokova.library/UI_KIT/Atoms/Title";

import {StyledSection} from "./styled/styled";
import {
	useGetProductQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/elenaBokova.entities/product.entity/redux/api";


const MainPage: FC = () => {

	return <StyledSection>
		<Title/>
		<Catalog useGetProductsQuery={useGetProductQuery}/>
	</StyledSection>;
};

export default MainPage;


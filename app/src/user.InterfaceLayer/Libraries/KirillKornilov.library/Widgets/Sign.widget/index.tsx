import React, { FunctionComponent } from "react";

import LogInForm from "../LogInForm.widget";
import SignWidgetType from "./type";
import HeaderSignMolecule from "../../UI_KIT/Molecules/HeaderSign.molecule";
import FooterSignWidget from "../FooterSign";
// import * as S from "./styled";


const SignWidget: FunctionComponent<SignWidgetType> = ({ useGetGoodsQuery ,useGetTodoQuery}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data } = useGetGoodsQuery();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data2 } = useGetTodoQuery();

	return <>	
		<HeaderSignMolecule/>
		<LogInForm/>
		<FooterSignWidget/>
		
		</>;
};

export default SignWidget;

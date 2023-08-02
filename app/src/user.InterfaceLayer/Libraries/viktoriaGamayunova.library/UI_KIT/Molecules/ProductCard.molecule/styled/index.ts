import styled from "styled-components";

import Colors from "../../../../constants/colors";

export const divCont = styled.div`
	border-radius: 10px;
	overflow: hidden;
	background-color: ${Colors.WHITE};
	width: 128px;
	padding: 10px;
	margin: 10px;
	&:hover {
		box-shadow: 3px 3px 20px 1px black;
	}
`;

export const divWithImg = styled.div`
	display: flex;
	align-items: center;
`;

export const p = styled.p`
	font-size: 16px;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

import Colors from "../../../constants/colors";

export const header = styled.div`
	background-color: ${Colors.WHITE};
	padding: 30px 70px;
	height: 5vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const myLink = styled(Link)`
	//background-color: red;
`;

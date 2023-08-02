import styled from "styled-components";

import Colors from "../../../constants/colors";

export const footer = styled.div`
	background-color: ${Colors.BLACK};
	color: ${Colors.WHITE};
	padding-top: 14px;
	padding-bottom: 8px;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	min-height: 11vh;
`;

export const ulBlocks = styled.ul`
	display: flex;
	justify-content: space-around;
`;
export const ulInside = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const li = styled.li``;

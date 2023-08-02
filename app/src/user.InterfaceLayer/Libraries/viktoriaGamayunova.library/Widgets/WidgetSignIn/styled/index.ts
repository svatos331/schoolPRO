import styled from "styled-components";

import Colors from "../../../constants/colors";

export const bg_div = styled.div`
	background: linear-gradient(
		to right,
		${Colors.VIKTORIA_BG_GREY} 45%,
		${Colors.VIKTORIA_BLUE} 45%,
		${Colors.VIKTORIA_BLUE} 100%
	);
	min-height: 100vh;
`;

export const form = styled.form`
	background-color: ${Colors.WHITE};
	border-radius: 25px;
	width: 400px;
	padding: 13px 25px 30px 25px;
`;

export const p = styled.p`
	font-size: 15px;
	margin-top: 10px;
	margin-bottom: 5px;
`;
export const pRight = styled.p`
	font-size: 15px;
	text-align: right;
`;
export const pCenter = styled.p`
	font-size: 15px;
	text-align: center;
`;
export const pSignIn = styled.p`
	font-size: 25px;
`;
export const pWelcome = styled.p`
	font-size: 36px;
	color: ${Colors.WHITE};
	margin-bottom: 15px;
`;
export const pTextWelcome = styled.p`
	font-size: 24px;
	color: ${Colors.WHITE};
`;

export const divContent = styled.div`
	margin: 30px 118px 0 40px;
	display: flex;
	justify-content: space-between;
`;

export const divText = styled.div``;

export const divName = styled.div`
	display: flex;
	justify-content: space-between;
`;

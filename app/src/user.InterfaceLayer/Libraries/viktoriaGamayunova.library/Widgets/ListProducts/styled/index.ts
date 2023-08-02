import styled from "styled-components";

import Colors from "../../../constants/colors";

export const bg_div = styled.div`
	//background-color: ${Colors.VIKTORIA_BG_GREY};
	background: linear-gradient(
		to bottom,
		${Colors.VIKTORIA_RED} 10vh,
		${Colors.VIKTORIA_BG_GREY} 10vh,
		${Colors.VIKTORIA_BG_GREY} 100%
	);
	min-height: 80vh;
	width: 100%;
	padding-bottom: 16vh;
	padding-top: 12vh;
`;
export const divList = styled.div``;
export const divCards = styled.div`
	display: flex;
`;
export const form = styled.form`
	background-color: ${Colors.WHITE};
	border-radius: 15px;
	width: 250px;
	padding: 30px 20px 10px 20px;
`;

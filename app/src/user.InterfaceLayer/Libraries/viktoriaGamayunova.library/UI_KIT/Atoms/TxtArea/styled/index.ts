import styled from "styled-components";

import Colors from "../../../../constants/colors";

export const TxtArea = styled.textarea`
	border: 2px solid ${Colors.VIKTORIA_BORDER_PASS_INPUT};
	background-color: ${Colors.VIKTORIA_BG_PASS_INPUT};
	color: ${Colors.VIKTORIA_TXT_PASS_INPUT};
	border-radius: 8px;
	padding: 18px 15px 18px 15px;
	margin-bottom: 40px;
	margin-top: 10px;
	display: block;
	font-size: 15px;
	width: 70%;
	min-height: 100px;
`;

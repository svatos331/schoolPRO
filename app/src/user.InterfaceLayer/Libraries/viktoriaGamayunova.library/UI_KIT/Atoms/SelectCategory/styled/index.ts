import styled from "styled-components";

import Colors from "../../../../constants/colors";

export const select = styled.select`
	display: block;
	margin-bottom: 20px;
	margin-top: 10px;
	width: auto;
	font-size: 15px;
	border: 2px solid ${Colors.VIKTORIA_BORDER_PASS_INPUT};
	background-color: ${Colors.VIKTORIA_BG_PASS_INPUT};
	color: ${Colors.VIKTORIA_TITLE_GREY};
	padding: 8px 15px 8px 15px;
	&:hover {
		border-color: ${Colors.VIKTORIA_BORDER_GREY};
	}
`;

export const option = styled.option``;

import styled from "styled-components";
import { Link } from "react-router-dom";

import Colors from "../../../../constants/colors";

export const container = styled.div`
	border-right: 2px solid ${Colors.BLACK};
	padding-right: 10px;
	display: flex;
	align-items: center;
`;
export const container_btns = styled.div`
	border: 1px solid ${Colors.VIKTORIA_BORDER_SMALL_IMG};
	border-radius: 15px;
	display: flex;
	margin-right: 10px;
`;
export const username = styled.p`
	text-transform: uppercase;
	margin-left: 5px;
`;
export const linkToAcc = styled(Link)`
	display: flex;
	align-items: center;
`;

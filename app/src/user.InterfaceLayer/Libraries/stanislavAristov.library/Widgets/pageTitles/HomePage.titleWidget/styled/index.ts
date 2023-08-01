import { styled } from "styled-components";

import Colors from "../../../../../../constants/colors";

export const HomePageTitleWidgetWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
export const Menu = styled.div`
	background: ${Colors.BLUE_THEME_GRADIENT};
	height: 228px;
	margin: 0 auto;
	border-radius: 0 0 78px 78px;
	z-index: 1;
	width: 100%;
`;
export const MenuTitle = styled.div`
	padding-left: 60px;
`;
export const MenuHeader = styled.div`
	padding: 20px;
	display: flex;
	justify-content: space-between;
	button {
		padding: 0;
	}
`;

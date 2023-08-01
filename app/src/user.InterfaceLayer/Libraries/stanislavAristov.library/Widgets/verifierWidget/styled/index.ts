import { styled } from "styled-components";

import Colors from "../../../../../constants/colors";

export const VerifierWidgetWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	&,
	div {
		text-align: center;
	}
	.primaryBtn {
		margin-top: 50px;
	}
`;
export const Header = styled.header``;
export const InputCard = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	flex-direction: column;
	gap: 20px;
	input {
		line-height: 60px;
		font-weight: bold !important;
		text-align: center;
		border-bottom: 1px solid ${Colors.BLACK} !important;
	}
`;

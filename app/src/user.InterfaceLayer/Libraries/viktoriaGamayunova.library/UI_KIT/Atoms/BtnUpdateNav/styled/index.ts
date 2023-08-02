import styled from "styled-components";

import Colors from "../../../../constants/colors";

export const btn = styled.button<{ isFocus: boolean }>`
	font-size: 18px;
	color: ${(props) =>
		props.isFocus ? "inherit" : Colors.VIKTORIA_BORDER_GREY};

	& + div {
		background-color: ${(props) =>
			props.isFocus
				? Colors.VIKTORIA_VIOLET
				: Colors.VIKTORIA_BORDER_PASS_INPUT};
		border: 1px solid
			${(props) =>
				props.isFocus
					? Colors.VIKTORIA_VIOLET
					: Colors.VIKTORIA_BORDER_PASS_INPUT};
	}

	&:hover {
		color: inherit;
	}
	&:hover + div {
		background-color: ${Colors.VIKTORIA_VIOLET};
		border: 1px solid ${Colors.VIKTORIA_VIOLET};
	}
`;

// export const btn = styled.button`
// 	font-size: 18px;
// 	color: ${Colors.VIKTORIA_BORDER_GREY};
// 	&:focus {
// 		color: inherit;
// 	}
// 	&:focus + div {
// 		background-color: ${Colors.VIKTORIA_VIOLET};
// 		border: 1px solid ${Colors.VIKTORIA_VIOLET};
// 	}
// `;

export const divContNav = styled.div`
	color: ${Colors.VIKTORIA_VIOLET};
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 20px;
`;

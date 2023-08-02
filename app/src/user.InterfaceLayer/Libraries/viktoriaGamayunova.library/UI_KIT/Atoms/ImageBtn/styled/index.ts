import styled from "styled-components";

import Colors from "../../../../constants/colors";

export const cont = styled.div<{ color_fill: boolean }>`
	margin: 7px;

	&:hover {
		* {
			${(props) =>
				props.color_fill
					? `fill: ${Colors.VIKTORIA_VIOLET};`
					: `stroke: ${Colors.VIKTORIA_VIOLET}`}
		}
	}
`;

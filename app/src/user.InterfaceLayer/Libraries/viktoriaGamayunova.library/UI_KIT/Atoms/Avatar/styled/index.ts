import styled from "styled-components";

import Colors from "../../../../constants/colors";

export const AvatarDiv = styled.div<{ w: any; h: any; isSmall: boolean }>`
	width: ${(props) => props.w};
	height: ${(props) => props.h};
	border-width: 1px;
	border-color: ${(props) =>
		props.isSmall
			? Colors.VIKTORIA_BORDER_SMALL_IMG
			: Colors.VIKTORIA_SIDE_GREY};
	border-style: ${(props) => (props.isSmall ? "solid" : "dashed")};
	border-radius: ${(props) => (props.isSmall ? "50%" : "12px")};
	padding: 5px;
	overflow: hidden;
`;

export const AvatarDivSmall = styled.div`
	width: 100%;
	height: 100%;
	border-radius: inherit;
	overflow: hidden;
`;

export const AvatarImg = styled.img`
	width: 100%;
`;

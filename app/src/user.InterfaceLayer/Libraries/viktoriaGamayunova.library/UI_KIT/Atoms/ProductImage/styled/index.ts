import styled from "styled-components";

// import Colors from "../../../../constants/colors";

export const imgProd = styled.img<{ width: any; height: any; margin: any }>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin-right: ${(props) => props.margin};
`;

import styled from "styled-components";

import { ReactComponent as homeImg } from "../../../assets/icons/homeIMG.svg";
import { ReactComponent as settingsImg } from "../../../assets/icons/settingIMG.svg";
import { ReactComponent as logoutImg } from "../../../assets/icons/logoutIMG.svg";
import Colors from "../../../constants/colors";

export const HomeSettingsDiv = styled.div`
	//margin-right: 60px;
`;
export const ImgDiv = styled.div<{ active: string }>`
	display: flex;
	align-items: center;
	margin-top: 20px;
	color: ${Colors.VIKTORIA_SIDE_GREY};
	color: ${(props) => props.active == "true" && Colors.VIKTORIA_VIOLET};
	* {
		stroke: ${(props) => props.active == "true" && Colors.VIKTORIA_VIOLET};
	}
	&:hover {
		cursor: pointer;
		color: ${Colors.VIKTORIA_VIOLET};
		* {
			stroke: ${Colors.VIKTORIA_VIOLET};
		}
	}
	&:active {
		color: ${Colors.VIKTORIA_VIOLET_DARK};
		* {
			stroke: ${Colors.VIKTORIA_VIOLET_DARK};
		}
	}
`;
export const HomeImg = styled(homeImg)``;
export const SettingsImg = styled(settingsImg)``;
export const LogoutImg = styled(logoutImg)``;

export const bg_div = styled.div`
	background-color: ${Colors.VIKTORIA_BG_GREY};
	min-height: 88vh;
	height: auto;
	display: flex;
	width: 100%;
`;

export const cont = styled.div`
	padding: 30px 210px 30px 220px;
	flex-grow: 1;
	display: flex;
	justify-content: space-between;
`;

export const moduleDivLeft = styled.div`
	background-color: ${Colors.WHITE};
	border-radius: 10px;
	flex-grow: 1;
	margin-right: 30px;
	padding: 30px 30px 45px 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const moduleDivRight = styled.div`
	background-color: ${Colors.WHITE};
	border-radius: 10px;
	flex-grow: 4;
	padding: 50px 50px 45px 30px;
`;

export const divNav = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 -20px;
`;

export const Label = styled.label`
	color: ${Colors.VIKTORIA_SIDE_GREY};
	font-size: 16px;
`;
export const divPass = styled.div`
	margin-left: 20px;
`;

export const divInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const divField = styled.div`
	margin-right: 50px;
`;

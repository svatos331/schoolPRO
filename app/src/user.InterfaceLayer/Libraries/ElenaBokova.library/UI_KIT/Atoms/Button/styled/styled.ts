import styled from "styled-components";
import CustomColors from "../../../../constants/colors";
import Colors from "../../../../../../constants/colors";

const MainButton = styled.button`
  display: block;
  margin-top: auto;
  min-height: 30px;
  width: 80%;
  padding: 0 12px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: ${Colors.WHITE};
  background-color: ${CustomColors.ACCENT};
  border: none;
  border-radius: 20px;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  box-sizing: border-box;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const LikeButton = styled.button`
  position: absolute;
  right: 1vw;
  top: 1vw;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: ${CustomColors.DARK};
  cursor: pointer;
  transition: opacity 0.2s ease-out;

  
  &:hover {
    opacity: 0.8;
  }
`;

export default MainButton
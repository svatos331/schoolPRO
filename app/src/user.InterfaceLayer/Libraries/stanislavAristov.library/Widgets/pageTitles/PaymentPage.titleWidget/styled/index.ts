import {styled} from "styled-components";

import Colors from "../../../../../../constants/colors";

export const CardsPageTitleWidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Menu = styled.div`
  background: ${Colors.BLUE_THEME_GRADIENT};
  padding: 30px;
  margin: 0 auto;
  display: flex;
  border-radius: 0 0 78px 78px;
  z-index: 1;
  width: 100%;
  position: relative;
  
`;
export const MenuTitle = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;
  
`;
export const MenuHeader = styled.div`
  float:left;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  button{
  }
`;

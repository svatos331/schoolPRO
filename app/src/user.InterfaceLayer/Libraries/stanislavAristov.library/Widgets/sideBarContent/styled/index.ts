import {styled} from "styled-components";

import Colors from "../../../../../constants/colors";

export const SideBarContentWidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;
export const Header = styled.header`
  height: 100px;
  padding: 26px;
  display: flex;
  align-items: center;
`;
export const Menu = styled.main`
  flex: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  a{
    border: 1px solid ${Colors.BLUE};
    padding: 20px;
    -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;
  }
`;
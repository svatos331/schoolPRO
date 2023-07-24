import {styled} from "styled-components";

import Colors from "../../../../../constants/colors";

export const SideBarContentWidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Header = styled.header`
    flex:100px;
`;
export const Menu = styled.main`
  flex: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  a{
    border: 1px solid ${Colors.BLUE};
    text-align: center;
    padding: 20px;
    -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;
  }
`;
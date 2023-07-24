import {styled} from "styled-components";

import Colors from "../../../constants/colors/index";
import {
    ITheme
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/theme.entity/redux/slice";

export const AfterAuthLayout = styled.div<{curcolor?:ITheme, bgc? : ITheme}>`
  min-height: 100vh;
  //padding: 0 26px;
  display: flex;
  max-width: 950px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  //gap: 20px;
  background:  ${({curcolor,bgc}) => bgc?bgc:curcolor?? Colors.BLUE_THEME_GRADIENT};
  main{
    width: 100%;
    flex:auto;
    //width: calc(100% - 72px);
    &>div>div{
      //padding: 36px;
      
    }
  }
`;

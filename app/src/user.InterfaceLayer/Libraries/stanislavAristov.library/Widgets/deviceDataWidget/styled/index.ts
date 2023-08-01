import {styled} from "styled-components";

import {
    ITheme
} from "../../../../../../business.InterfaceLayer/store/shared/entities/aristovStanislav.entities/theme.entity/redux/slice";

export const DeviceDataWidgetWrapper = styled.header<{curcolor:ITheme}>`
  display: flex;
  padding: 5px;
  max-width: 950px;
  
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background:  ${({curcolor}) => curcolor} ;
`;
export const Left = styled.div`

`;
export const Right = styled.div`
  display: flex;
  gap: 10px;
`;
import {styled} from "styled-components";

import Colors from "../../../../../../../constants/colors";

// eslint-disable-next-line @typescript-eslint/no-unused-vars


export const  UserWithNameWrapper = styled.div<{$isSelected : boolean}>`
  display: flex;
  padding: 10px;
  gap: 15px;
  border-radius: 30px;
  -webkit-box-shadow: 4px 4px 26px 20px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 4px 26px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 26px 20px rgba(0, 0, 0, 0.2);
  background-color: ${({$isSelected}) => $isSelected?Colors.SHADOWBLUE : ""};
`;
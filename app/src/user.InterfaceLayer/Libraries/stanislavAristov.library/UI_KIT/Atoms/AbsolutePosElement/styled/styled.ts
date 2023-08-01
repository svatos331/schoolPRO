import {styled} from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IStyledAbsolutePostElement} from "./type";


export const StyledAbsolutePosElement = styled.div<IStyledAbsolutePostElement>`
  position: ${props => props.position};
  width: 100%;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  z-index: -1;
 
`;

import {styled} from "styled-components";

export const AbsoluteBlock = styled.div<{minh?:string,maxh?:string}>`
 min-height: ${({minh})=> minh};
  img{
    max-height: ${({maxh})=> maxh};
    
  }
 
`;
export const GradientImg = styled.img`
  width: 100%;
  min-height: 515px;
  max-height: 1000px;
`;
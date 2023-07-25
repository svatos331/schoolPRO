import {styled} from "styled-components";

import Colors from "../../../../../../../../constants/colors";

// eslint-disable-next-line @typescript-eslint/no-unused-vars


export const  KeyBoardItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 15px;
  width: 70px;
  flex-basis: 101px;
  align-items: center;
  justify-content: center;
  height: 76px;
  background-color: ${Colors.BLUEGRAY};
  
  &:active{
    background-color: ${Colors.SHADOWBLUE}; 
  }
  @media (min-width:900px){
    width: 101px;
    
    &:hover{
      background-color: ${Colors.SHADOWBLUE};
    }
    &:active{
      background-color: transparent;
    }
  }
  
`;
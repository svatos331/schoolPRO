import {styled} from "styled-components";

import Colors from "../../../constants/colors";


export const CardsPageWrapper = styled.div`
width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 0;
  //padding: 0 20px;
  align-items: center;
  div{
    align-items: center;
  }
  position: relative;
  
`;


export const Main = styled.main`
  display: flex;
  @media (max-width:351px){
    padding: 0 20px;
  }  
`;



import {styled} from "styled-components";

import Colors from "../../../constants/colors";


export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    align-items: center;
  }
  position: relative;
  
`;

export const Menu = styled.div`
  background: ${Colors.BLUE_THEME_GRADIENT};
  height: 228px;
  position: fixed;
  top: 29px;
  left: 0;
  border-radius: 0 0  78px 78px;   
  z-index: 1;
  width: 100%;
  
`;
export const Balance = styled.div`
  
  -webkit-box-shadow: -1px 5px 22px 0px rgba(196,196,196,1);
  -moz-box-shadow: -1px 5px 22px 0px rgba(196,196,196,1);
  box-shadow: -1px 5px 22px 0px rgba(196,196,196,1);
  -webkit-border-radius:78px 78px 0 0; 
  background-color: white;
  -moz-border-radius: 50px;
  border-radius: 50px;
  z-index: 100;
  width: 100%;
  margin-top: calc(228px/2);
  //background-color: white !important;
`;
export const CheckBalance = styled.div`
  margin-top: 50px;
  .primaryBtn{
    gap:80px;
    padding: 50px 20px;
    @media (max-width: 448px){
      padding: 20px;
      
    }
    img {
      margin-right: 10px;
    }    
  }
  text-align: center;
`;


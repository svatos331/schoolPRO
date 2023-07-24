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
  border-radius: 0 0 78px 78px;
  z-index: 1;
  width: 100%;

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

export const Logo = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  width: 50px;
  height: 50px;
`;
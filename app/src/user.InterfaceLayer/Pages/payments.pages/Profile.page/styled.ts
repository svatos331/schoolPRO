import {styled} from "styled-components";

import Colors from "../../../constants/colors";


export const ProfilePageWrapper = styled.div`
width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 20px;
  gap: 0;
  //padding: 0 20px;
  div{
    align-items: center;
  }
  
`;


export const Main = styled.main`
  flex:auto;
  @media (max-width:351px){
    padding: 0 20px;
  }  
`;
export const Header = styled.main`
  max-height: 50px !important;
`;
export const Footer = styled.footer`
    margin-top: auto;
`;

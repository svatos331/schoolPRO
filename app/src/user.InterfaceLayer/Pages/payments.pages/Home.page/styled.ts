import {styled} from "styled-components";

import Colors from "../../../constants/colors";


export const HomePageWrapper = styled.div`
width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 0;
  //padding: 0 20px;
  align-items: center;
  div{
    //align-items: center;
  }
  position: relative;
  
`;


export const Main = styled.main`
  display: flex;
  @media (max-width:351px){
    padding: 0 20px;
  }  
`;
export const CheckBalance = styled.div`
  margin-top: 50px;
  .primaryBtn{
    gap:80px;
    padding: 50px 20px;
    @media (max-width: 300px){
      padding: 20px 0;


    }
    img {
      margin-right: 10px;
    }    
  }
  text-align: center;
`;


export const Logo = styled.div<{hasImage : boolean}>`
  border: ${({hasImage}) => hasImage? 0 :  "1px solid black"};
  border-radius: 50%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  img{
    width: 100%;
    height: 100%;
  }
`;
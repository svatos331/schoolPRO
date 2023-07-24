import {styled} from "styled-components";

import Colors from "../../../../../constants/colors";



export const CardListModuleWrapper = styled.div`
  min-height: 280px;
  padding: 20px;
  overflow-x: scroll;
  //background-color: ${Colors.WHITE};
  border-radius: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  //align-items: center;
  flex-direction: column;
  text-align: center;
  & > div{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const Info = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Diagram = styled.div`
  position: relative;
  align-self: center;
  margin-top: 50px;
  img{
    max-width: 200px !important;
    @media (max-width: 300px){
      max-width: 150px !important;
      
    }
    @media (max-width: 400px){
      max-width: 100% !important;

    }
  }
`;
export const Left = styled.div`
`;
export const Right = styled.div`
    
`;
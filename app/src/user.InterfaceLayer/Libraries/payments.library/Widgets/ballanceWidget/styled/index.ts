import {styled} from "styled-components";



export const BallanceWidgetWrapper = styled.div`
  min-height: 280px;
  display: flex;
  width: 100%;
  gap: 10px;
  //align-items: center;
  flex-direction: column;
  text-align: center;
`;
export const Info = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Diagram = styled.div`
  position: relative;
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
import {styled} from "styled-components";

export const IKeyBoardModuleWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  & > div{
    width: 100%;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 10px;  
`;
export const Cell = styled.div`
  
`;
import {styled} from "styled-components";

import Colors from "../../../constants/colors";
export const PaymentBlock = styled.div`
    max-width: 800px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin: 0 auto;
  margin-top: 50px;
`;
export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  margin: 0 auto;
  .p-inputtext{
   
    color: ${Colors.BLUE};
   
  }
  &::after {
    content:"";
    width: 100%;
    height: 1px;
    background-color: ${Colors.GRAY};
  }
  input{
    border: 0 !important;
    position: relative;
    
    // border-bottom: 1px solid ${Colors.GRAY} !important;
    text-align: center;
  }
`;
export const Keyboard = styled.div`
  
`;
export const TOUser = styled.div`
  
`;
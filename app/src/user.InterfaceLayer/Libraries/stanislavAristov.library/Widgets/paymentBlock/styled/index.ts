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

  & .p-toast-message {
    padding: 20px;
    border: 2px solid red;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: rgba(190, 117, 117, 0.33) !important;

  }

  .p-toast-message-success {
    background-color: rgba(18, 134, 3, 0.4) !important;
    border: 2px solid #015212;

  }

  .p-toast-message-error {
    background-color: rgba(190, 117, 117, 0.33) !important;
    border: 2px solid red;
  }

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
    font-weight: bold;
    font-size: 25px !important;
    // border-bottom: 1px solid ${Colors.GRAY} !important;
    text-align: center;
  }
`;
export const Keyboard = styled.div`
  
`;
export const TOUser = styled.div`
  
`;
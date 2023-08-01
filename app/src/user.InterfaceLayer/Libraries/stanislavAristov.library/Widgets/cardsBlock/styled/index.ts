import {styled} from "styled-components";
export const CardsBlock = styled.div`
    max-width: 800px;
  top: 100px;
  z-index: 1000;
  margin: 0 auto;
  padding-top: 250px;
  align-self: flex-end;

`;
export const CardsList = styled.div`
  position: absolute;
  width: calc(100% - 80px);
  top: 150px;
  left: 40px;
  z-index: 5;
`;
export const ResentTransactions = styled.div`
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

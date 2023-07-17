import styled from "styled-components";
import Colors from "../../../../constants/colors";


export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  padding: 20px;
  text-align: center;
  background-color: ${Colors.WHITE};
  box-sizing: border-box;
  border-radius: 15px;
`;


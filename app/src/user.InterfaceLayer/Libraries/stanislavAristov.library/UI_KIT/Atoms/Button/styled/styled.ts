import {css, styled} from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Colors from "../../../../../../constants/colors";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IButtonPropsStyled} from "./type";


export const ButtonWrapper = styled.button<IButtonPropsStyled>`
  /* Общие стили для кнопки */
  padding: 30px;
  margin-top: 1px;
  gap: 5px;
  border: none;
  border-radius: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: ${({width}) => width};
  height: ${({height}) => height};
  justify-content: space-between;
  border: ${({border}) => border};
  color: ${({color}) => color};
  
  ${(props) =>
          props.type === "primary" &&
          css`
            background: ${Colors.GRADIENT};
          `}
  ${(props) =>
          props.iconPosition === "right" &&
          css`
            flex-direction: row-reverse;
          `}
  ${(props) =>
          props.type === "secondary" &&
          css`
            background-color: transparent;
          `}
  ${({contentposition}) =>
          contentposition === "row-center" &&
          css`
            flex-direction: row;
            justify-content: center;
          `}
  ${({contentposition}) =>
          contentposition === "column-center" &&
          css`
            flex-direction: column;
            justify-content: center;
          `}
  ${({contentposition}) =>
          contentposition === "between" &&
          css`
            flex-direction: row;
            justify-content: space-between;
          `}
  ${({disabled}) =>
          disabled === true &&
          css`
            filter: brightness(1.4);
          `}
`;

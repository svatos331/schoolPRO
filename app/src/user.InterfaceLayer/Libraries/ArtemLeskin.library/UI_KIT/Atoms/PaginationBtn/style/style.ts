import styled from "styled-components";

import { BtnInterface } from "../type/index";

export const BtnPag = styled.button<BtnInterface>`
    box-sizing: border-box;
    border: ${(props) => (props.active?"2px solid blue":"1px solid gray")};
    padding: 10px;
    width: 40px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: rgba(34,34,37,.75);
    color: white;
    font-weight: bold;
    margin-right: 10px;
`;
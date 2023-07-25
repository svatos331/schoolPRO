import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
    display: flex;
    align-items: center;
    padding: 16px 30px;
    border-radius: 8px;
    font-weight: bold;
    background-color: rgba(34,34,37,.75);
    transition: background-color 0.3s;
    margin: 0 10px;

    &:hover{
        background-color: rgba(67, 67, 69, 0.75);
    }
`;
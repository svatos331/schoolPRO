import styled from "styled-components";

export const NavItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 16px;
    box-sizing: border-box;
    font-weight: bold;
    color: white;
    opacity: .6;
    transition: opacity 0.3s;

    &:hover{
        opacity: 1;
    }
`;


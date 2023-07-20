import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

export const Btn = styled.div`
    padding: 10px;
    background-color: transparent;
    transition: all .3s ease;
    margin-left: 20px;
    cursor: pointer;
    &:hover{
        background-color: rgba(125, 125, 125, 0.712);
    }
`;

export const IconWrap = styled.div`
    svg {
        width: 20px;
        height: 20px;
    }
`;

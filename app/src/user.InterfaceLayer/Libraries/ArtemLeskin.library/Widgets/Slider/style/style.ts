import styled from "styled-components";

export const Slider = styled.div`
    display: flex;
    margin-top: 10px;
    position: relative;
`;

export const PrevBtn = styled.button`
    position: absolute;
    transition: all 0.3s ease;
    top: 45%;
    left: 50px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(214, 214, 214);

    &:hover{
        scale: 1.05
    }
`;

export const NextBtn = styled.button`
    position: absolute;
    top: 45%;
    right: 50px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(214, 214, 214);
    transition: all 0.3s ease;

    &:hover{
        scale: 1.05
    }
`;

export const IconWrap = styled.div`
    svg {
        width: 50px;
        height: 50px;
    }
`;
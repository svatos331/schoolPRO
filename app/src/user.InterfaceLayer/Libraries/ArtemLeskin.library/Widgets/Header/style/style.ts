import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    position: relative;
    height: 50px;
    align-items: center;
    width: 50%;
    justify-content: space-between;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const NavItems = styled.div`
    display: flex;
    width: 65%;
    justify-content: space-between;
    @media (max-width: 730px) {
        display: none;
    }
`;

export const Btn = styled.button`
    position: absolute;
    right: 0px;
    width: 50px;
    fill: white;
    svg {
        width: 30px;
        height: 30px;
    }
    @media (min-width: 730px) {
        display: none;
    }
`;
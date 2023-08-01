import styled from "styled-components";

export const Bar = styled.div`
    margin-top: 50px;
`;

export const CardList = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
    @media (max-width: 426px) {
        justify-content: center;
    }
`;
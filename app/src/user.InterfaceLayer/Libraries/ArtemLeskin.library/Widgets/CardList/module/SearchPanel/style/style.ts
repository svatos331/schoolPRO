import styled from "styled-components";

export const SearchModule = styled.div`
    display: flex;
    width: 35%;
    justify-content: space-between;

    @media (max-width: 1600px) {
        width: 45%;
    }

    @media (max-width: 426px) {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: column;
    }
`;

export const SearchPanel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
    @media (max-width: 426px) {
        flex-direction: column;
    }
`;


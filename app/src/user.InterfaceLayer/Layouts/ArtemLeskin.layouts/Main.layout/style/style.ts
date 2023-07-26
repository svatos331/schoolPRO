import styled from "styled-components";

export const App = styled.div`
    background-color: black;
    color: white;
    overflow-y: scroll;
    width: 100%;
    padding-bottom: 50px;
    -ms-overflow-style: none; 
    scrollbar-width: none; 

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;
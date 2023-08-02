import styled from "styled-components";

export const List = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;
    overflow-y: scroll;
    scroll-margin-top: 10px;
    padding: 10px 0;
`;

export const IconWrap = styled.div`
    svg {
        fill: rgb(220, 220, 220);
        color: rgb(220, 220, 220);
        width: 30px;
        height: 30px;
        margin-right: 10px;
        scrollbar-width: 0;
    }
`;
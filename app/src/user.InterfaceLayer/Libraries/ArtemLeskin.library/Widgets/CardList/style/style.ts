import styled from "styled-components";
import PaginationBar from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/PaginationBar";

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    @media (max-width: 430px) {
        justify-content: center;
    }
`;

export const Load = styled.div`
    min-height: 90vh;
`;

export const Pagination = styled(PaginationBar)`
    justify-content: center;
`;

export const Container = styled.div`
    display: block;
`;
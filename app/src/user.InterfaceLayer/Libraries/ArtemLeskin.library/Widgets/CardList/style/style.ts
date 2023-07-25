import styled from "styled-components";
import PaginationBar from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/PaginationBar";

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    min-height: 60vh;
`;

export const Load = styled.div`
    height: 90vh;
`;

export const Pagination = styled(PaginationBar)`
    margin: 0 auto;
`;
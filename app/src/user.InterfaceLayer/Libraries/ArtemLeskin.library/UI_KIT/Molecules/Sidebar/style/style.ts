import styled from "styled-components";
import { SidebarI } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Sidebar/type";

export const Sidebar = styled.div<SidebarI>`
    position: fixed;
    display: flex;
    transform: translateX(${(props) => (props.isActive?"65%":"200%")});
    flex-direction: column;
    z-index: 100;
    background-color: black;
    border-left: 1px solid gray;
    width: 35%;
    padding: 30px;
    min-width: 200px;
    height: 95%;
    transition: all 0.6s;
    @media (min-width: 430px) {
        display: none;
    }
`;

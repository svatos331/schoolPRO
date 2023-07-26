import styled from "styled-components";
import { SidebarI } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Sidebar/type";

export const Sidebar = styled.div<SidebarI>`
    position: absolute;
    display: flex;
    flex-direction: column;
    right: ${(props) => (props.isActive?"0":"-100%")};
    z-index: 100;
    background-color: black;
    border-left: 1px solid gray;
    width: 25%;
    padding: 30px;
    min-width: 200px;
    height: 95%;
    transition: all 0.6s;
`;

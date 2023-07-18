import styled from "styled-components";
import CustomColors from "../../../constants/colors";


export const StyledSection = styled.section`
  display: flex;
  padding: 20px 50px;
  margin-bottom: 50px;
  background-color: ${CustomColors.HEADER};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
  0 0 1px rgba(0, 0, 0, 0.04);
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 25px;
  font-weight: 700;
  color: ${CustomColors.ACCENT};
  text-transform: uppercase;

  &:hover,
  &:active {
    opacity: 0.7;
  }
  
  &:nth-child(0) {
    margin-right: auto;
  }  
`;

export const StyledSpan = styled.span`
margin-left: -10px
`;
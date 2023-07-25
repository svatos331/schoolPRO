import { Link } from "react-router-dom";
import styled from "styled-components";
import RatingComponent from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Rating";

export const Card = styled(Link)`
    width: 250px;
    height: 375px;
    border-radius: 20px;
    position: relative;
    background-size: cover;
    margin: 10px;
    cursor: pointer;

`;

export const Rating = styled(RatingComponent)`
    position: absolute;
    color: red;
    left: 20px;
`;



export const Shadow = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    border-radius: 20px;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .5s ease;

    &:hover{
        border: 0.5px solid rgb(199, 199, 199);
        opacity: 1;
        background-color: rgba(82, 82, 82, 0.696);
    }
`;



export const Info = styled.div`
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: 20px;
`;
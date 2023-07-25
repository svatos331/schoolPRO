import { styled } from "styled-components";
import { RatingStyleProps } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Rating/type";

export const Rating = styled.div<RatingStyleProps>`
    border-radius: 5px;
    position: absolute;
    padding: 10px;
    margin: 20px 0 0 20px;
    font-weight: bold;
    color: white;
    background-color: ${(props) => (Number(props.rat) > 8?"green":Number(props.rat) > 6?"orange":"red")};
`;
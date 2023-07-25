import styled from "styled-components";
import RatingComponent from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Rating";

export const Block = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
    background-size: cover;
`;
export const Shadow = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(80, 80, 80, 0.637);
`;
export const Info = styled.div`
    position: absolute;
    top: 60%;
    width: 45%;
    left: 50px;
`;
export const Img = styled.img`
    width: 80%;
    height: 100px;
`;
export const HeaderInfo = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding-top: 10px;
    width: 100%;
`;

export const Rating = styled(RatingComponent)`
    font-weight: bold;
    border-radius: 5px;
`;
export const Txt = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
`;
export const TxtArr = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: rgb(255, 255, 255);
`;

export const Description = styled.div`
    margin-top: 15px;
    margin-left: 70px;
`;
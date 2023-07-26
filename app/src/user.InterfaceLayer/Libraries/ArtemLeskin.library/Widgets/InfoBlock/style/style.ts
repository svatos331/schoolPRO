import styled from "styled-components";
import RatingComponent from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Rating";
import Text from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";

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
    @media (max-width: 426px) {
        top: 50%;
        width: 85%;
    }
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
    flex-wrap: wrap;
`;

export const Rating = styled(RatingComponent)`
    font-weight: bold;
    border-radius: 5px;
`;
export const Txt = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);

    @media (max-width: 426px) {
        width: 100%;
        height: 20px;
    }
`;

export const Description = styled.div`
    margin-top: 15px;
    margin-left: 70px;
    @media (max-width: 426px) {
        margin-top: 100px;
        margin-left: 10px;
    }
`;

export const TxtContainer = styled.div`
    display: flex;
    height: 40px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 80px;
    align-items: center;
    @media (min-width: 426px) {
        flex-direction: column;
        width: 100%;
        height: 100px;
    }
`;
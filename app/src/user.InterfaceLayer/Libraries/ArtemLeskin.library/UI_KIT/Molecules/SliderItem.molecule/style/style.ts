import { styled } from "styled-components";
import Text from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import HoverVideoPlayer from "react-hover-video-player";

import { WrapProps, ItemProps } from "../type/index";


export const Item = styled.div<ItemProps>`
    width: 100%;
    background: url('${(props) => (props.img)}');
    height: 66vh;
    position: relative;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    @media (max-width: 426px) {
        height: 40vh;
    }
`;

export const Title = styled(Text)`
    position: absolute;
    left: 100px;
    bottom: 50px;
    @media (max-width: 426px) {
        left: 10px;
        bottom: 10px;
    }
`;

export const Video = styled(HoverVideoPlayer)`
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-size: cover;
`;

export const Wrap = styled.div<WrapProps>`
    width: 100%;
    overflow: hidden;
    height: 100%;
    opacity: ${(props) => (props?.active === true?"1":"0")};
    transition: all 1s ease;
`;


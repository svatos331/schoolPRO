import React, { useState } from "react";
import { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text/type";

import * as ST from "./style/style";
import { SliderItemProps } from "./type/index";

export const SliderItem: React.FC<SliderItemProps> = (props: SliderItemProps) => {
    const {slide} = props;
    const [isVideoActive, setIsVideoActive] = useState(false);

    return (
        <ST.Item
            img={slide.preview}
            onMouseEnter={() => setIsVideoActive(true)}
            onMouseLeave={() => setIsVideoActive(false)}
        >
            <ST.Title title={slide.title} size={TextSize.XL}/>
            <ST.Wrap active={isVideoActive}>
            <ST.Video
                videoSrc={slide.video}
                volume={0.25}
                muted={false}
                />
            </ST.Wrap>
        </ST.Item>
    );
};
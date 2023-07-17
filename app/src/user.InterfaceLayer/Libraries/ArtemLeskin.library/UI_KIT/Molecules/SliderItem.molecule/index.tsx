import React, { useState } from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { ISliderItem } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Slider/types";
import classNames from "classnames";
import HoverVideoPlayer from "react-hover-video-player";

import cls from "./style/SliderItem.module.css";

interface SliderItemProps {
    slide: ISliderItem;
}

export const SliderItem: React.FC<SliderItemProps> = (props: SliderItemProps) => {
    const {slide} = props;
    const [isVideoActive, setIsVideoActive] = useState(false);

    return (
        <div 
            style={{backgroundImage: `url(${slide.preview})`}} 
            className={cls.item}
            onMouseEnter={() => setIsVideoActive(true)}
            onMouseLeave={() => setIsVideoActive(false)}
        >
            <Text title={slide.title} size={TextSize.XL} className={cls.title}/>
            <div className={classNames(cls.wrap, { [cls.active]: isVideoActive })}>
            <HoverVideoPlayer
                className={classNames(cls.video)}
                videoSrc={slide.video}
                volume={0.25}
                muted={false}
                />
            </div>
        </div>
    );
};
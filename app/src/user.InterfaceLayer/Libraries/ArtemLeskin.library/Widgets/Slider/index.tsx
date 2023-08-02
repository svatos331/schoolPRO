import React, { memo, useState } from "react";
import SliderItem from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/SliderItem.molecule";
import { sliderData } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Slider/data";

import * as ST from "./style/style";
import { ReactComponent as RRow } from "../../assets/icons/RightRow.svg";
import { ReactComponent as LRow } from "../../assets/icons/LeftRow.svg";

const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const prevSlide = () => {
        setActiveSlide((prev) => activeSlide === 0?3:prev-1);
    };

    const nextSlide = () => {
        setActiveSlide((prev) => activeSlide !== 3?prev + 1:0);
    };

    return (
        <ST.Slider>
            <SliderItem slide={sliderData[activeSlide]}/>
            <ST.PrevBtn onClick={prevSlide}>
                <ST.IconWrap>
                    <LRow/>
                </ST.IconWrap>
            </ST.PrevBtn>
            <ST.NextBtn onClick={nextSlide}>
                <ST.IconWrap>
                    <RRow/>
                </ST.IconWrap>
            </ST.NextBtn>
        </ST.Slider>
    );
};

export default memo(Slider);
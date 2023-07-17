import React, { useState } from "react";
import { SliderItem } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/SliderItem.molecule";
import { sliderData } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/Slider/data";

import { ReactComponent as RRow } from "../../assets/icons/RightRow.svg";
import { ReactComponent as LRow } from "../../assets/icons/LeftRow.svg";
import cls from "./style/Slider.module.css";

const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const prevSlide = () => {
        setActiveSlide((prev) => activeSlide === 0?3:prev-1);
    };

    const nextSlide = () => {
        setActiveSlide((prev) => activeSlide !== 3?prev + 1:0);
    };

    return (
        <div className={cls.slider}>
            <SliderItem slide={sliderData[activeSlide]}/>
            <button className={cls.prevbtn} onClick={prevSlide}>
                <LRow className={cls.icon}/>
            </button>
            <button className={cls.Nextbtn} onClick={nextSlide}>
                <RRow className={cls.icon}/>
            </button>
        </div>
    );
};

export default Slider;
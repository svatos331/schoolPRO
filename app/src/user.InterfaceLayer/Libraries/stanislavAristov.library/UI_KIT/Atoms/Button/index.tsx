// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useMemo} from "react";

import * as ST from "./styled/styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IButtonProps} from "./type";
import IconElement from "../IconElement";
import {ButtonPropsDefault} from "./const";
import EFontClasses, {EFontFamily} from "../../../../../constants/fontsClasses";
import Typography from "../Typograpgy";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button: FC<IButtonProps> = ({color,border,className,contentposition,width,height,icon, iconPosition, hasIcon, disabled, text, type, onClick, background}) => {
    const isIconNeed = useMemo(() => {
        return (hasIcon && icon);
    }, [hasIcon, icon]);
    // eslint-disable-next-line no-console


    return (

        <ST.ButtonWrapper
            color={color}
            border={border}
            className={className}
            contentposition={contentposition}
            width={width}
            background = {background}
            iconPosition = {iconPosition}
            type={type}
            onClick = {onClick}
            disabled={disabled}>
            {typeof text === "string"?
                <Typography
                    family={EFontFamily.SEGOE}
                    as="p"
                    color={color}
                    className={EFontClasses.MainTextSegoe16_20_413_900}
                >
                    {text}
                </Typography>: text
            }
            {isIconNeed? <IconElement src={icon}/> : null}
        </ST.ButtonWrapper>
    );
};
Button.defaultProps = ButtonPropsDefault;
export default Button;
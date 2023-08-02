import React, { memo } from "react";

import * as ST from "./style/style";
import { TextProps, TextTheme, TextAlign, TextSize } from "./type/index";



const Text: React.FC<TextProps> = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;


    return (
        <ST.Container className={className}>
            {title && 
            <ST.Title 
                color={theme} 
                align={align} 
                size={size}
                >
                    {title}
            </ST.Title>}
            {text && 
            <ST.Text
                color={theme} 
                align={align} 
                size={size}
                >
                    {text}
            </ST.Text>}
        </ST.Container>
    );
};

export default memo(Text);
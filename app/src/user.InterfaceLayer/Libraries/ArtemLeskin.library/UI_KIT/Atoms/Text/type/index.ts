export interface ITextInterface {
    color: string,
    align: string,
    size: string,
}

export enum TextTheme{
    PRIMARY = "white",
    ERROR = "red"
}

export enum TextSize{
    M = "16px",
    L = "24px",
    XL = "32px"
}

export enum TextAlign{
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right",
}


export interface TextProps {
    className?: string,
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign
    size?: TextSize;
}
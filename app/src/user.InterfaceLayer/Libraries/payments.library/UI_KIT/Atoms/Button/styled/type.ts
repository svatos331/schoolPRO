
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ReactNode} from "react";

export interface IButtonPropsStyled  {
    border?:string,
    contentposition?:"row-center"|"column-center"|"between",
    type?: "primary" | "secondary" | "default";
    background?: string;
    hasIcon?: boolean;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    width?:string,
    height?:string,
}
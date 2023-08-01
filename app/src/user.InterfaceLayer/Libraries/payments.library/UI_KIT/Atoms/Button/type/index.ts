
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Colors from "../../../../../../constants/colors";

export interface IButtonProps  {
 border?:string,
 className?:string,
 contentposition?:"row-center"|"column-center"|"between",
 type?: "primary" | "secondary" | "default";
 background?: string;
 hasIcon?: boolean;
 icon?: string;
 color?:Colors
 iconPosition?: "left" | "right";
 text?: string | JSX.Element;
 onClick?: () => void;
 disabled?: boolean;
 width?:string,
 height?:string,
}

export interface IButtonPropsSimple  {
 border?:string,
 className?:string,
 contentposition?:"row-center"|"column-center"|"between",
 background?: string;
 hasIcon?: boolean;
 icon?: string;
 color?:Colors
 iconPosition?: "left" | "right";
 text: string;
 onClick?: () => void;
 disabled?: boolean;
 width?:string,
 height?:string,
}
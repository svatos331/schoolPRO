// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IStyledAbsolutePostElement} from "../styled/type";

export interface IAbsolutePosElementProps extends IStyledAbsolutePostElement  {
    children:JSX.Element,
    customClass?:string,
    position:"absolute"|"fixed"
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import Colors from "../../../../constants/colors/index";

type ITypographyProps = {
    family?:string,
    weight?:number | string,
    color?:Colors,
    size?:string,
    children:JSX.Element | string,
    className?:string
};

export default ITypographyProps;

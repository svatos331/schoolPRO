// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import EFontClasses from "../../../../../../constants/fontsClasses";
import Colors from "../../../../../../constants/colors";

export type ITypographySimpleType = {
    as?: keyof JSX.IntrinsicElements,
    text: string,
    color?: Colors,
    className?: EFontClasses
}

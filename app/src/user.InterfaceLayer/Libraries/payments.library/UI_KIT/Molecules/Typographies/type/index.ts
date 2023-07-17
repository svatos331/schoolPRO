// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Colors from "../../../../constants/colors";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import EFontClasses from "../../../../../../constants/fontsClasses";

export type ITypographySimpleType = {
    as?: keyof JSX.IntrinsicElements,
    text: string,
    color?: Colors,
    className?: EFontClasses
}

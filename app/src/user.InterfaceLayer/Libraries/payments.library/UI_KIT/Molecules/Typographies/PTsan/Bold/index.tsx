// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import Typography from "../../../../Atoms/Typograpgy";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import EFontClasses, {EFontFamily} from "../../../../../../../constants/fontsClasses";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Colors from "../../../../../constants/colors";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ITypographySimpleType} from "../../type";

const Typography_PTSan_Bold:FC<ITypographySimpleType> = ({as,text, color,className}) => {
    return (
        <Typography
            family={EFontFamily.PTSAN}
            weight={"bold"}
            as={as}
            color={color}
            className={className}
        >
            {text}
        </Typography>
    );
};
Typography_PTSan_Bold.defaultProps = {
    color:Colors.BLACK,
    className:EFontClasses.MainTextPTSanBold19_21_413_900,
    as:"h1"
};
export default Typography_PTSan_Bold;
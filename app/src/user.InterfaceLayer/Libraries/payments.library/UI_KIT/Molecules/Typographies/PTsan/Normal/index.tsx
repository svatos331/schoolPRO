// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import Typography from "../../../../Atoms/Typograpgy";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Colors from "../../../../../constants/colors";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ITypographySimpleType} from "../../type";
import EFontClasses, {EFontFamily} from "../../../../../constants/fontClasses";

const Typography_PTSan_Normal :FC<ITypographySimpleType> = ({as,text, color,className}) => {
    return (
        <Typography
            family={EFontFamily.PTSAN}
            weight={"normal"}
            as={as}
            color={color}
            className={className}
        >
            {text}
        </Typography>
    );
};
Typography_PTSan_Normal.defaultProps = {
    color:Colors.BLACK,
    className:EFontClasses.MainTextPTSan20_24_413_900,
    as:"h1"
};
export default Typography_PTSan_Normal;
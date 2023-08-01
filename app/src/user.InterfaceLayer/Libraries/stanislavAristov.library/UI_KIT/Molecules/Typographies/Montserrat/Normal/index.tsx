// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import Typography from "../../../../Atoms/Typograpgy";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import EFontClasses, {EFontFamily} from "../../../../../../../constants/fontsClasses";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Colors from "../../../../../constants/colors";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ITypographySimpleType} from "../../type";

const Typography_Montserrat_Normal :FC<ITypographySimpleType> = ({as,text, color,className}) => {
    return (
        <Typography
            family={EFontFamily.MONT}
            weight={"normal"}
            as={as}
            color={color}
            className={className}
        >
            {text}
        </Typography>
    );
};
Typography_Montserrat_Normal.defaultProps = {
    color:Colors.BLACK,
    className:EFontClasses.MainTextMont30_45_413_900,
    as:"h1"
};
export default Typography_Montserrat_Normal;
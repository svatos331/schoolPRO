import React, {FC} from "react";

import * as ST from "../styled/styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IAbsolutePosElementProps} from "../type";

export const AbsolutePosElement: FC<IAbsolutePosElementProps> = ({position,customClass, top, left, children, bottom, right}) => {
    return (
        <ST.StyledAbsolutePosElement
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            className={customClass}
            position={position}
        >
            {children}
        </ST.StyledAbsolutePosElement>
    );
};
AbsolutePosElement.defaultProps = {
    customClass: ""
};
import React, {FC} from "react";
import {StyledSpan} from "./styled/styled";

type AmountProps = {
    children: number;
}
function Amount({children}: AmountProps) {
    return (
        <StyledSpan>{children}</StyledSpan >
    );
}

export default Amount
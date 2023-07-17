import React, {FC} from "react";

import * as ST from "../styled/styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IButtonProps} from "../type";

const Button: FC<IButtonProps> = ({children}) => {
    return (
        <ST.Button>
            {children}
        </ST.Button>
    );
};
Button.defaultProps = {

};
export default Button;
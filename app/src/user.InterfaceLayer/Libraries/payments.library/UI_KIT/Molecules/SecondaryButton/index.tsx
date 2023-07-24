// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Button from "../../Atoms/Button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IButtonPropsSimple} from "../../Atoms/Button/type";
import Colors from "../../../../../constants/colors";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SecondaryButton: FC<IButtonPropsSimple> = (props) => {

    return (
            <Button 
                {...props}
                border={`1px solid${props.color}`}
                className="secondaryBtn"
                type={"secondary"}
            />
    );
};SecondaryButton.defaultProps = {
    contentposition:"between",
    color:Colors.BLUE,
    border:`1px solid${Colors.BLUE}`

    
};
export default SecondaryButton;
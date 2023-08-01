// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Button from "../../Atoms/Button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IButtonPropsSimple} from "../../Atoms/Button/type";
import Colors from "../../../../../constants/colors";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PrimaryButton: FC<IButtonPropsSimple> = (props) => {

    return (
            <Button 
                {...props}
                color={!props.color?Colors.WHITE:props.color}
                className="primaryBtn"
                type={"primary"}
            />
    );
};PrimaryButton.defaultProps = {
    contentposition:"between",
    color:Colors.WHITE
    
};
export default PrimaryButton;
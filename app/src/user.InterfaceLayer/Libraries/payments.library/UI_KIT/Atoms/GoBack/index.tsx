import React, {FC} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from "styled-components";

import batteryBorder from "../../../assets/icons/batteryBorder.svg";
import * as ST from "./styled";
import arrowLeft from "../../../assets/icons/arrow/straght/Left-Arrow.svg";
import {IGoBackProps} from "./type";
import Button from "../Button";


const GoBack: FC<IGoBackProps> = ({route}) => {


    return (
        <ST.GoBackWrapper>
            <Button
                icon={
                    arrowLeft
                }
                hasIcon={true}
                contentposition={"row-center"}
            />
        </ST.GoBackWrapper>
    );
};
export default GoBack;
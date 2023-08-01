// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useMemo} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from "styled-components";

import * as ST from "./styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IKeyBoardSubmitItemProps} from "./type";
import PrimaryButton from "../../../../../../../UI_KIT/Molecules/PrimaryButton";
import arrowRight from "../../../../../../../assets/icons/arrow/straght/Right-Arrow.svg";

const KeyBoardSubmitItem: FC<IKeyBoardSubmitItemProps> = ({onSubmitFunc}) => {


    return (
        <ST.KeyBoardSubmitItemWrapper>
            <PrimaryButton onClick={onSubmitFunc} icon={arrowRight} hasIcon={true} text={""}/>
        </ST.KeyBoardSubmitItemWrapper>
    );
};
export default KeyBoardSubmitItem;
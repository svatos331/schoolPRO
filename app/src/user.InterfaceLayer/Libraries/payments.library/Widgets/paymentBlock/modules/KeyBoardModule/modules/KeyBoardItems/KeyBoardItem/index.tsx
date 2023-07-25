// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useMemo} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from "styled-components";

import * as ST from "./styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IKeyBoardItemProps} from "./type";


const KeyBoardItem: FC<IKeyBoardItemProps> = ({element,onKeyBoardItemClick}) => {

    return (
        <ST.KeyBoardItemWrapper
            onClick = {() => {onKeyBoardItemClick(element);
        }}>
            {element}
        </ST.KeyBoardItemWrapper>
    );
};
export default KeyBoardItem;
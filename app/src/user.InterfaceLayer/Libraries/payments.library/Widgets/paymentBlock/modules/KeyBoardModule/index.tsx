// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, JSX, ReactNode, useEffect, useMemo} from "react";



import * as ST from "./styled";
import {IKeyBoardModuleProps} from "./type";
import KeyBoardItem from "./modules/KeyBoardItems/KeyBoardItem";
import KeyBoardSubmitItem from "./modules/KeyBoardItems/KeyBoardSubmitItem";


const KeyBoardModule: FC<IKeyBoardModuleProps> = ({onKeyBoardItemClick, onSubmitFunc}) => {

    return (
        <ST.IKeyBoardModuleWrapper>
           <ST.Row>
               {["1","2","3"].map((el,index) => (
                   <KeyBoardItem element={el} onKeyBoardItemClick = {onKeyBoardItemClick} key={index}/>)
               )}
           </ST.Row>
            <ST.Row>
                {["7","8","9"].map((el,index) => (
                    <KeyBoardItem element={el} onKeyBoardItemClick = {onKeyBoardItemClick} key={+el}/>)
                )}
            </ST.Row>
            <ST.Row>
                {["7","8","9"].map((el,index) => (
                    <KeyBoardItem element={el} onKeyBoardItemClick = {onKeyBoardItemClick} key={+el}/>)
                )}
            </ST.Row>
            <ST.Row>
                {["00","0"].map((el,index) => (
                    <KeyBoardItem element={el} onKeyBoardItemClick = {onKeyBoardItemClick} key={index}/>)
                )}
                <KeyBoardSubmitItem onSubmitFunc={onSubmitFunc}/>
            </ST.Row>
        </ST.IKeyBoardModuleWrapper>
    );
};
export default KeyBoardModule;
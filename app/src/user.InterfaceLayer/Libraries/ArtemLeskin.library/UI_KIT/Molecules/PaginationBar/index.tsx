import React from "react";
import { IPaginationBar } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/PaginationBar/types";
import PaginationBtn from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/PaginationBtn";

import * as ST from "./style/style";

const PaginationBar: React.FC<IPaginationBar> = (props: IPaginationBar) => {
    const {count, func, current} = props;

    return (
        <ST.List>
            {Array.from({length: count}).map((item, index) => {
                return <PaginationBtn 
                        value={index + 1} 
                        func={func} 
                        active={Number(index + 1) === current}
                        key={index + 1}
                        />;
            })}
        </ST.List>
    );
};

export default PaginationBar;
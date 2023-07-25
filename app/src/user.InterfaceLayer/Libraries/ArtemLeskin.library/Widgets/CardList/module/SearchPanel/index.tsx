import React from "react";

import { SearchModule } from "./modules/SearchModule";
import SortModule from "./modules/SortModule";
import {SrcPanel} from "./type/index";
import * as ST from "./style/style";


export const SearchPanel: React.FC<SrcPanel> = (props: SrcPanel) => {
    const {chGanre, chRating, chOrder, chYear} = props;

    return (
        <ST.SearchPanel>
            <SearchModule chGanre={chGanre} chRating={chRating} chYear={chYear}/>
            <SortModule chOrder={chOrder}/>
        </ST.SearchPanel>
    );
};
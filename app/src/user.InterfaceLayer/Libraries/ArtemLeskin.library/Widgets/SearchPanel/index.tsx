import React from "react";
import { SearchModule } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/SearchPanel/modules/SearchModule";
import SortModule from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/SearchPanel/modules/SortModule";

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
import React from "react";
import Select from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Select.molecule";

import { genreDataTextList, genreDataValueList, ratingDataTextList, ratingDataValueList, yearDataTextList, yearDataValueList } from "../../data/index";
import { SrcModule } from "../../type/index";
import * as ST from "../../style/style";


export const SearchModule: React.FC<SrcModule> = (props: SrcModule) => {
    const {chGanre, chRating, chYear} = props;

    return (
        <ST.SearchModule>
            <Select 
                onChange={chGanre}
                textOptionList={genreDataTextList} 
                valueOptionList={genreDataValueList}
            />
            <Select 
                onChange={chRating}
                textOptionList={ratingDataTextList} 
                valueOptionList={ratingDataValueList}
            />
            <Select 
                onChange={chYear}
                textOptionList={yearDataTextList} 
                valueOptionList={yearDataValueList}
            />
        </ST.SearchModule>
    );
};
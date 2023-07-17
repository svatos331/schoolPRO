import React from "react";
import { Select } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Select.molecule";
import { genreDataTextList, genreDataValueList, ratingDataTextList, ratingDataValueList, yearDataTextList } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/SearchPanel/data";

import cls from "../../style/SearchPanel.module.css";


export const SearchModule: React.FC = () => {

    return (
        <div className={cls.srchModule}>
            <Select textOptionList={genreDataTextList} valueOptionList={genreDataValueList}/>
            <Select textOptionList={ratingDataTextList} valueOptionList={ratingDataValueList}/>
            <Select textOptionList={yearDataTextList} valueOptionList={yearDataTextList}/>
        </div>
    );
};
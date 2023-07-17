import React from "react";
import { Select } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Select.molecule";
import { sortDataTextList, sortDataValueList } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/SearchPanel/data";

import cls from "../../style/SearchPanel.module.css";

const SortModule = () => {
  return (
    <div className={cls.sortModule}>
        <Select textOptionList={sortDataTextList} valueOptionList={sortDataValueList}/>
    </div>
  );
};

export default SortModule;
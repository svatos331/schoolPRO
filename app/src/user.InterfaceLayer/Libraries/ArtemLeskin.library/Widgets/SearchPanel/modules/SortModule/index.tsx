import React from "react";
import { Select } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Select.molecule";
import { sortDataTextList, sortDataValueList } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/SearchPanel/data";

import {SortModuleProps} from "../../type/index";
import cls from "../../style/SearchPanel.module.css";

const SortModule: React.FC<SortModuleProps> = ({chOrder}: SortModuleProps) => {
  return (
    <div className={cls.sortModule}>
        <Select
          onChange={chOrder} 
          textOptionList={sortDataTextList} 
          valueOptionList={sortDataValueList}/>
    </div>
  );
};

export default SortModule;
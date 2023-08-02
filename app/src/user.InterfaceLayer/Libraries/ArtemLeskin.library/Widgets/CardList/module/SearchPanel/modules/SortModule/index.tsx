import React from "react";
import Select from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Select.molecule";

import { sortDataTextList, sortDataValueList } from "../../data/index";
import {SortModuleProps} from "../../type/index";

const SortModule: React.FC<SortModuleProps> = ({chOrder}: SortModuleProps) => {
  return (
    <>
        <Select
          onChange={chOrder} 
          textOptionList={sortDataTextList} 
          valueOptionList={sortDataValueList}/>
    </>
  );
};

export default SortModule;
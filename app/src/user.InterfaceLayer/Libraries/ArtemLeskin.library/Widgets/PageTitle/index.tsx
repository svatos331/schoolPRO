import React, { memo } from "react";
import Text from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text/type";

import { IPageTitle } from "./type/index";

const PageTitle: React.FC<IPageTitle> = (props: IPageTitle) => {
    const {title} = props;

    return (
        <Text title={title} size={TextSize.XL}/>
    );
};

export default memo(PageTitle);
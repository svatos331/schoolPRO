import { FC } from "react";

import * as S from "./styled"; 
import { Icons, Icon} from "../../Atoms/Atom1/icons";

interface ISidebarDataItem {
    color: string;
    text: string;
    icon: Icons;
}

const SidebarDataItem: FC<ISidebarDataItem> = ({color, text, icon}) => {

    return (
        <S.sidebar_data_item>
            <Icon width={18} height={18} color={color} icon={icon} />
            <p style={{color: color}}>{text}</p>
            <S.selector/>
        </S.sidebar_data_item>
    );
};

export default SidebarDataItem;
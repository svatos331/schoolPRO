import { FC } from "react";

import * as S from "./styled"; 
import { Icons, Icon} from "../../Atoms/Atom1/icons";

interface ISidebarDataItem {
    color: string;
    text: string;
    icon: Icons;
    active: boolean;
}

const SidebarDataItem: FC<ISidebarDataItem> = ({color, text, icon, active}) => {

    return (
        <S.sidebar_data_item>
            
            <Icon width={18} height={18} color={color} icon={icon}  />
            <p style={{color: color}}>{text}</p>
            <S.selector  onActive={active}/>
        </S.sidebar_data_item>
    );
};

export default SidebarDataItem;
import { FC } from "react";

import "./styled/style.css";
import { Icons, Icon} from "../../Atoms/Atom1/icons";

interface ISidebarDataItem {
    color: string;
    text: string;
    icon: Icons;
}

const SidebarDataItem: FC<ISidebarDataItem> = ({color, text, icon}) => {

    return (
        <button className="sidebar-data-item">
            <Icon width={18} height={18} color={color} icon={icon} />
            <p style={{color: color}}>{text}</p>
            <div className="selector"/>
        </button>
    );
};

export default SidebarDataItem;
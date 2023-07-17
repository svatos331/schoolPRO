import { FC } from "react";

import { Icon, Icons } from "../Atom1/icons";

import "./styled/style.css";

interface ICheckBox {
    checked:boolean
}

const CheckBox:FC<ICheckBox> = ({checked}) => {

    return (
        <button className={checked ? "checkbox" : "checkbox unchecked"}>
            <Icon width={15} height={15} icon={Icons.Check} color='#29A19C' />
        </button>
    );
};

export default CheckBox;
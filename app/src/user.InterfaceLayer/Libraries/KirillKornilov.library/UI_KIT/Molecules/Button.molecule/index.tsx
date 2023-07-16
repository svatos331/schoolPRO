import React,{ FC } from "react";

import "./styled/styled.css";


import { Icons, Icon } from "../../Atoms/Atom1/icons";

interface IButton { 
    text: string;
    color: string;
    icon: boolean;
}




const Button: FC<IButton> = ({text, color, icon})=>{
    if(icon) return(
        <button  style={{backgroundColor: color}}>
            <div>
                <Icon width={20} height={20} color="#FAFAFA" icon={Icons.RoundPlus} />
                <p>
                    {text}
                </p>
            </div>
         </button>
    );

    return(
        <button style={{backgroundColor:color}} >{text}</button>
    );

};

export default Button;

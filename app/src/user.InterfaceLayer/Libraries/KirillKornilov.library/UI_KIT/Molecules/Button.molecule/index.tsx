import React,{ FC } from "react";

import * as S from "./styled";
import { Icons, Icon } from "../../Atoms/Atom1/icons";

interface IButton { 
    text: string;
    color: string;
    icon: boolean;
    onClick?: any;
}

const Button: FC<IButton> = ({text, color, icon ,onClick})=>{
    if(icon) return(
        <S.button  color={color}>
            <div
            onClick={(e)=>{
                e.preventDefault();
                onClick();
            }}>
                <Icon width={20} height={20} color="#FAFAFA" icon={Icons.RoundPlus} />
                <p>
                    {text}
                </p>
            </div>
         </S.button>
    );

    return(
        <S.button color={color} >
            <div onClick={onClick}>
            {text}
            </div>
            </S.button>
    );

};

export default Button;

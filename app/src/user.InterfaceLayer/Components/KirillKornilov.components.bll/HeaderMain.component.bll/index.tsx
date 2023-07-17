import React from "react";
// import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/todo.entity/redux/api";
// import Widget1 from "../../../Libraries/KirillKornilov.library/Widgets/widget1";
import Button from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Button.molecule"; 
import { Icons,Icon } from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Atom1/icons";
import Avatar from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Avatar.Atom";

import "./style.css";

const MainHeader = () => {

    return (
        <div id='main-header'>
            <Button text='Новая задача' color='#29A19C' icon={true}/>
            <button className='theme-button'>
                <Icon width={24} height={24} color='#bbbcb9' icon={Icons.Moon}/>
            </button>
            <div id='user-card'>
                <p>Хорошего дня, username</p>
                <Avatar img={require("../../../Libraries/KirillKornilov.library/assets/icons/avatar.png")} diameter={44}/>
                
                <button className='toggle-button'>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default MainHeader;
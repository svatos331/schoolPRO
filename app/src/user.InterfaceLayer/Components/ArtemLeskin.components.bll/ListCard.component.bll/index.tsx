import React from "react";
import { Card } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule";

import cls from "./ListCard.module.css";

const ListCard = () => {
    const data = {
        name: "Матрица", 
        id: 301, 
        preview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
        rating: 8.5,
        filsLength: 136,
        year: 1999
    };
    const arr = [
        data,data,data,data,data,data,data,data,data,data,data,data,
        data,data,data,data,data,data,data,data,data,data,data,data
    ];

    return (
        <div className={cls.list}>
            {arr.map((item, index) => 
                <Card card={item} key={index}/>
            )}
            <Card card={data}/>
        </div>
    );
};

export default ListCard;
import React from "react";
// import { Card } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule";
import { useGetAllMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import { Card } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";

import cls from "./ListCard.module.css";

interface ListCardpProps {
    type: string
}

const ListCard = ({type}:ListCardpProps) => {
    const {data, isLoading}  = useGetAllMovieQuery({page: 1, type: type});

    return (
        <div className={cls.list}>
        
        {isLoading && 
            <div style={{height: "90vh"}}>
                <Text title="Loading..." size={TextSize.XL}/>
            </div>
        }
        {data?.items?.map((item: any, index: number) => 
            <Card
                card={item} 
                key={index}
            />
        )}
        </div>
    );
};

export default ListCard;
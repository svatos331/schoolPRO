import React from "react";
import { IMoviePage } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule/type";

import cls from "./style/InfoBlock.module.css";

interface InfoBlockProps {
    info: IMoviePage;
}

export const InfoBlock: React.FC<InfoBlockProps> = (props: InfoBlockProps) => {
    const { info } = props;

    const color = info.rating > 8?"green":info.rating > 6?"orange":"red";

    
    const ganre = info.genres.map((item:any) => {return item?.genre;}).join(", ");
    const country = info.countries.map((item:any) => {return item?.country;}).join(", ");

    return (
        <div style={{backgroundImage: `url(${info.poster})`}} className={cls.block}>
            <div className={cls.shadow}>
                <div className={cls.info}>
                    <img src={info.logoUrl} className={cls.img} alt={info.name} />
                    <div className={cls.headerInfo}>
                        <div className={cls.rating} style={{backgroundColor: color}}>{info.rating}</div>
                        <div className={cls.txt}>{info.year}</div>
                        <div className={cls.txtS}>{ganre}</div>
                        <div className={cls.txt}>{`${info.ageLimits.split("age")[1]}+`}</div>
                        <div className={cls.txtS}>{
                           country
                        }</div>
                        <div className={cls.txt}>{info.filsLength + " мин"}</div>
                    </div>
                    <div className={cls.descriptoin}>
                        {info.description}
                    </div>
                    {/* <div className={cls.manInfo}>
                        <div className="">
                            Режиссёр: <span>{info.}</span>
                        </div>
                        <div className="">
                            Актеры: <span></span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
import React from "react";
// import { IMoviePage } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule/type";
import { useParams } from "react-router-dom";
import Info from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/Info.component.bll";

import cls from "./MoviePage.module.css";



const MoviePage: React.FC = () => {

    const {id} = useParams();
    // const data: IMoviePage = {
    //     name: "Матрица", 
    //     id: 301, 
    //     poster: "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig",
    //     rating: 8.5,
    //     description: "Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным",
    //     filsLength: 136,
    //     logoUrl: "https://avatars.mds.yandex.net/get-ott/1648503/2a00000170a5418408119bc802b53a03007b/orig",
    //     year: 1999,
    //     ageLimits: "age16",
    //     countries: [],
    //     genres: []
    // };

    return (
        <div className={cls.page}>
            <Info id={id || ""}/>
        </div>
    );
};

export default MoviePage;
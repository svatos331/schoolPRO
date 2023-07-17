/* eslint-disable no-console */
import React, { useState} from "react";
import { ICard } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule/type";
import { RecBar } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/RecBar";


export const RecomedPanel: React.FC = () => {


    const data = {
        name: "Матрица", 
        id: 301, 
        preview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
        rating: 8.5,
        filsLength: 136,
        year: 1999
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cards, setCards] = useState<ICard[]>([data, data, data, data, data]);

//     useEffect(() => {
//     fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/301", {
//     method: "GET",
//     headers: {
//         "X-API-KEY": "3fb1ca5b-4af2-42d7-a282-92da7dea890a",
//         "Content-Type": "application/json",
//     },
// })
//     .then(res => res.json())
//     .then(json => {
//         setCards([{
//             name: json.nameRu, 
//             id: json.kinopoiskId, 
//             preview: json.posterUrlPreview,
//             rating: json.ratingKinopoisk,
//             filsLength: json.filmLength,
//             year: json.year
//         }]);
//         console.log({
//             name: json.nameRu, 
//             id: json.kinopoiskId, 
//             preview: json.posterUrlPreview,
//             rating: json.ratingKinopoisk,
//             filsLength: json.filmLength,
//             year: json.year
//         });
//     })
//     .catch(err => console.log(err));

//     }, []);


    return (
        <div className="">
            <RecBar cards={cards} headerTitle="Например боевики"/>
            <RecBar cards={cards} headerTitle="Например боевики"/>
            <RecBar cards={cards} headerTitle="Например боевики"/>
        </div>
    );
};
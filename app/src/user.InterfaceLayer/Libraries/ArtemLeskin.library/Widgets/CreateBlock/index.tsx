import React, { memo, useState } from "react";
import Input from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Input";

import * as ST from "./style/style";
import {CreacteBlockProps} from "./type/index";


const CreacteBlock: React.FC<CreacteBlockProps> = (props: CreacteBlockProps) => {
    const [url, setUrl] = useState("");
    const [movie, setMovie] = useState<object | null>(null);
    const [name, setName] = useState("");
    const { func } = props;

    func(movie);

    const chUrl = (value: string) => {
        setUrl(value);
    };

    const chName = (value: string) => {
        setName(value);
    };

    const chMovie = () => {
        setMovie({
            kinopoiskId: 0,
            nameRu:name, 
            posterUrlPreview: url,
            ratingKinopoisk: 0,
            year: 2023,
            filmLength: 0
        });
    };

    return (
        <ST.Block>
            <Input value={url} onChange={chUrl} placceholder="Ссылка на картинку"/>
            <Input value={name} onChange={chName} placceholder="Имя фильма"/>
            <ST.Btn onClick={chMovie}>
                Создать
            </ST.Btn>
        </ST.Block>
    );
};

export default memo(CreacteBlock);
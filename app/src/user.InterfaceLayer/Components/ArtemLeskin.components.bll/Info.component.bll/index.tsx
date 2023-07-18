import { useGetOneMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import React from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { InfoBlock } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/InfoBlock";

interface InfoProps {
    id: string
}

const Info: React.FC<InfoProps> = ({id}: InfoProps) => {
    const {data, isLoading} = useGetOneMovieQuery({id});

    // eslint-disable-next-line no-console
    console.log(data);

    return (
        <div className="">
            <div className="">
            {isLoading && 
                <Text title="Loading..." size={TextSize.XL}/>
            }
            </div>
            {!isLoading && 
            <InfoBlock
            info={
            {
                id: data?.kinopoiskId,
                name: data?.nameRu,
                year: data?.yaer,
                countries: data?.countries,
                genres: data?.genres,
                poster: data?.coverUrl || data?.posterUrl,
                rating: data?.ratingKinopoisk,
                description: data?.shortDescription || data?.description,
                logoUrl: data?.logoUrl,
                ageLimits: data?.ratingAgeLimits,
                filsLength: data?.filmLength
            }
        }/>}
        </div>
    );
};

export default Info;
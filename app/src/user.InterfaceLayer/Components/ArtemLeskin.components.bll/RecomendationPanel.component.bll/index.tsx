import { useGetMovieFromGenreQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import React, { memo } from "react";
import CardBar from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CardBar";


const RecomedPanel: React.FC = () => {
    return (
        <div>
            <CardBar  
                headerTitle="Триллеры" 
                parament={1} 
                useGetMovie={useGetMovieFromGenreQuery}
            />
            <CardBar 
                headerTitle="Драма" 
                parament={2} 
                useGetMovie={useGetMovieFromGenreQuery}
            />
            <CardBar 
                headerTitle="Криминал" 
                parament={3} 
                useGetMovie={useGetMovieFromGenreQuery}/>
        </div>
    );
};

export default memo(RecomedPanel);
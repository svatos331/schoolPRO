/* eslint-disable no-console */
import { useGetMovieFromGenreQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import React from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { RecBar } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/RecBar";


export const RecomedPanel: React.FC = () => {

    const {data: data1, isLoading: isLoading1}  = useGetMovieFromGenreQuery({genre: 1});
    const {data: data2, isLoading: isLoading2}  = useGetMovieFromGenreQuery({genre: 2});
    const {data: data3, isLoading: isLoading3}  = useGetMovieFromGenreQuery({genre: 3});

    return (
        <div className="">
            {isLoading1
            ? <Text title="Loading..." size={TextSize.XL}/>
            : <RecBar cards={data1?.items.slice(0,5)} headerTitle="Триллеры"/>
            }
            {isLoading2
            ? <Text title="Loading..." size={TextSize.XL}/>
            : <RecBar cards={data2?.items.slice(0,5)} headerTitle="Криминал"/>
            }
            {isLoading3
            ? <Text title="Loading..." size={TextSize.XL}/>
            : <RecBar cards={data3?.items.slice(0,5)} headerTitle="Драма"/>
            }
        </div>
    );
};
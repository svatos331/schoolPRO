import React, { useCallback } from "react";
import { useGetAllMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import CardList from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CardList";
import { useAppDispatch, useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
import { sortValueActions } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/slice";


interface ListCardpProps {
    type: string;
}

const ListCard = ({type}:ListCardpProps) => {
    const dispatch = useAppDispatch();
    
    const page = useAppSelector((state) => state.sortValue.page);
    const order = useAppSelector((state) => state.sortValue.order);
    const ganre = useAppSelector((state) => state.sortValue.ganre);
    const yearFrom = useAppSelector((state) => state.sortValue.yearFrom);
    const yearTo = useAppSelector((state) => state.sortValue.yearTo);
    const rating = useAppSelector((state) => state.sortValue.rating);


    const changeOrder = useCallback((value: string) => {
        dispatch(sortValueActions.changeOrder(value));
    }, []);

    const changeGanre = useCallback((value: string) => {
        dispatch(sortValueActions.changeGanre(value));
    }, []);

    const changeYear = useCallback((value: string) => {
        dispatch(sortValueActions.changeYear(value));
    },[]);

    const changeRating = useCallback((value: string) => {
        dispatch(sortValueActions.changeRating(value));
    }, []);

    const changePage = useCallback((value: number) => {
        dispatch(sortValueActions.changePage(value));
    }, []);

    return (
        <CardList 
            type={type}
            useGetAllMovieQuery={useGetAllMovieQuery}
            ganre={ganre}
            rating={rating}
            page={page}
            order={order}
            yearFrom={yearFrom}
            yearTo={yearTo}
            changeOrder={changeOrder}
            changeGanre={changeGanre}
            changeYear={changeYear}
            changeRating={changeRating}
            changePage={changePage}
        />
    );
};

export default ListCard;
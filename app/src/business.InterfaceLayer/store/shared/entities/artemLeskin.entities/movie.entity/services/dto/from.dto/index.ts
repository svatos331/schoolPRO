import { ICard } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule/type";

export interface IPageMovieDTO {
    id: number,
    name: string,
    year: number,
    countries: any[],
    genres: any[],
    poster: string,
    rating: number,
    description: string,
    logoUrl: string,
    ageLimits: string,
    filsLength: number
}

export const movieFromDtoService = (props: any):IPageMovieDTO => {
	return {
        id: props?.kinopoiskId || props?.filmId,
        name: props?.nameRu,
        year: props?.yaer,
        countries: props?.countries,
        genres: props?.genres,
        poster: props?.coverUrl || props?.posterUrl,
        rating: props?.ratingKinopoisk,
        description: props?.shortDescription || props?.description,
        logoUrl: props?.logoUrl,
        ageLimits: props?.ratingAgeLimits,
        filsLength: props?.filmLength
    };
};

const movieSimilarItemDtoService = (props: any):ICard => {
	return {
        kinopoiskId: props?.kinopoiskId || props?.filmId,
        nameRu: props?.nameRu,
        posterUrlPreview: props?.coverUrl || props?.posterUrl,
        ratingKinopoisk: props?.ratingKinopoisk,
        year: props?.yaer,
        filmLength: props?.filmLength
    };
};

export const movieFromGenreDtoService = (props: any):ICard[] => {
	return props?.items.slice(0,5);
};

export const movieSimilarsDtoService = (props: any):ICard[] => {
	return props?.items.slice(0,5).map((item: any) => movieSimilarItemDtoService(item));
};

export const movieAutorDtoService = (props: any) => {
    return {
        items: props.items || props,
        totalPages: props.totalPages || 1,
    };
};
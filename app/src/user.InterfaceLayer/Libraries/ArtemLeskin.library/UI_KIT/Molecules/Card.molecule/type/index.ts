
export interface ICard {
    kinopoiskId: number,
    nameRu: string,
    posterUrlPreview: string,
    ratingKinopoisk: string,
    year: number,
    filmLength: number
}

export interface IMoviePage {
    id: number,
    name: string,
    poster: string,
    rating: number,
    description: string,
    logoUrl: string,
    ageLimits: string,
    filsLength: number,
    year: number,
    countries: string[],
    genres: string[]
}

export interface CardProps {
    card: ICard;
}


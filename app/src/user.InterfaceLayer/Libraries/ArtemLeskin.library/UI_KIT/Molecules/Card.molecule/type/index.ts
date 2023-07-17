
export interface ICard {
    id: number,
    name: string,
    preview: string,
    rating: number,
    filsLength: number,
    year: number,
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
export interface IMovie {
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

export interface ISidebar {
    isActive: boolean
}

export interface ISortValue {
    page: number,
    ganre: string,
    order: string,
    rating: string,
    yearFrom: string,
    yearTo: string
}

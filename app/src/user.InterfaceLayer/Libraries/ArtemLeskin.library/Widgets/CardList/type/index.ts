export interface ListCardpProps {
    type: string;
    ganre: string,
    rating: string,
    page: number,
    order: string,
    yearFrom: string,
    yearTo: string,
    useGetAllMovieQuery: any,
    changeOrder: (value: string) => void,
    changeGanre: (value: string) => void,
    changeYear: (value: string) => void,
    changeRating: (value: string) => void,
    changePage: (value: number) => void,
}
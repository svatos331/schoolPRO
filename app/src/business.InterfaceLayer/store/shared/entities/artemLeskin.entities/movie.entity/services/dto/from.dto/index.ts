export interface ICardMovieDTO {
    id: number,
    name: string,
    preview: string,
    rating: number,
    filsLength: number,
    year: number,
}

export const movieFromDtoServiceArray = (props: any):ICardMovieDTO => {
	return props;
};
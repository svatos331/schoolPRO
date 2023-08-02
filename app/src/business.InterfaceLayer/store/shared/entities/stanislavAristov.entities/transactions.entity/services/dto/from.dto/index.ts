export interface ITranDTO {
	sum: string;
	type: string;
	date: string;
}

export const transactionsTransformDTO = (response: ITranDTO[]): ITranDTO[] => {
	return response;
};

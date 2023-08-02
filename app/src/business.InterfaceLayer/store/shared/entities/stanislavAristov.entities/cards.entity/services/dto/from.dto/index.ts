export interface ICardDTO {
	balance: string;
	type: string;
	bank: string;
	number: string;
	createDate: string;
}

export interface IBalanceUserResponse {
	balance: string;
}

export const balanceFromUser = (response: IBalanceUserResponse) => {
	return response;
};
export const putFromResponse = (response: ICardDTO) => {
	return response;
};
export const cardsFromDtoServiceObject = (response: ICardDTO[]) => {
	return response;
};

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

export const balanceFromUser = (response: any): IBalanceUserResponse => {
	return response;
};
export const putFromResponse = (response: any): ICardDTO => {
	return response;
};
export const cardsFromDtoServiceObject = (response: any): ICardDTO[] => {
	return response;
};

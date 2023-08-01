export interface ICardDTO{
	"balance":string,
	"type":string,
	"bank":string,
	"number":string,
	"createDate":string,
}
export interface ITranDTO{
	"sum":string,
	"type":string,
	"date":string,
};

export interface IBalanceUserResponse {
	id: string;
	balance: string;
};
export interface IUserDTO extends IBalanceUserResponse{
	cards:Array<ICardDTO>;
	transactions:Array<ITranDTO>
}

export const userFromDtoServiceArray = (props: any):IUserDTO => {
	return props;
};
export const balanceFromUser = (response : IBalanceUserResponse) => {
	return {id:response.id, balance : response.balance};
};

export const cardsFromUser = (response : IBalanceUserResponse) => {
	return {id:response.id, balance : response.balance};
};
export const transactionsFromUser = (response : IBalanceUserResponse) => {
	return {id:response.id, balance : response.balance};
};
export const userFromDtoServiceObject = (props: any) => {
	return props;
};

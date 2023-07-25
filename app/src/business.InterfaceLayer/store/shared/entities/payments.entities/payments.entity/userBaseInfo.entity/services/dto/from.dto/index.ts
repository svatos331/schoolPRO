
export interface IBaseInfoUserDTO{
	"src":string,
	"name":string,
	"id":string,
	balance:number
}
export type UsersBaseInfoArray = Array<IBaseInfoUserDTO>;
export const transformFromBaseInfoDTO = (props: any):IBaseInfoUserDTO => {
	return props;
};
export const transformFromBaseInfoDTOArray = (props: any):UsersBaseInfoArray => {
	return props;
};
export const baseInfoUserFromDtoServiceObject = (props: any) => {
	return props;
};




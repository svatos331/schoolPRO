export interface IUserDTO {
	email: string;
	password: string;
}

export const userFromDtoServiceArray = (props: any): IUserDTO => {
	return props;
};

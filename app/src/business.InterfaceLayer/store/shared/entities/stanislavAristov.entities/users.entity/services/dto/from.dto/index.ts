export interface IBaseInfoUserDTO {
	src: string;
	name: string;
	id: string;
}
export const transformFromBaseInfoDTO = (props: any): IBaseInfoUserDTO => {
	return props;
};
export const transformFromBaseInfoDTOArray = (
	props: any
): IBaseInfoUserDTO[] => {
	return props;
};

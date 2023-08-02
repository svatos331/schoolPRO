export interface IBaseInfoUserDTO {
	src: string;
	name: string;
	id: string;
}
export const transformFromBaseInfoDTO = (
	props: IBaseInfoUserDTO
): IBaseInfoUserDTO => {
	return props;
};
export const transformFromBaseInfoDTOArray = (
	props: IBaseInfoUserDTO[]
): IBaseInfoUserDTO[] => {
	return props;
};

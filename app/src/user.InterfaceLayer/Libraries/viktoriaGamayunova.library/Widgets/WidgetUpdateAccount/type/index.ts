import { enumModule } from "../enum";

export interface WidgetUpdateAccountType {
	useUpdateUserMutation: any;
	useAddProductMutation: any;
	useGetAllCategoryQuery: any;
	useGetProductByInfluencerIdQuery: any;
	useGetAllUserQuery?: any;
}
export interface ModuleUpdateType {
	useUpdateUserMutation: any;
}
export interface ModuleUpdateAreaType {
	useUpdateUserMutation: any;
}
export interface ModuleShopType {
	useAddProductMutation: any;
}

export interface ModuleNav {
	setModule: any;
	module: enumModule;
}

import { ProductType } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/product.entity/redux/slice";

export interface ListProductsType {
	useGetProductQuery?: any;
	useGetProductByInfluencerIdQuery?: any;
	useGetAllUserQuery?: any;
	influenserId?: number;
}

export interface ModuleInfluencerProductsType {
	useGetProductByInfluencerIdQuery?: any;
	influensersId: number[] | number;
	filteredAllProducts?: ProductType[];
}

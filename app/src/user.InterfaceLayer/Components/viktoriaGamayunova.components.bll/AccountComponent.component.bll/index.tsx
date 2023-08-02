import React from "react";

import WidgetUpdateAccount from "../../../Libraries/viktoriaGamayunova.library/Widgets/WidgetUpdateAccount";
import {
	useUpdateUserMutation,
	useGetAllUserQuery,
} from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/api";
import {
	useAddProductMutation,
	useGetProductByInfluencerIdQuery,
} from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/product.entity/redux/api";
import { useGetAllCategoryQuery } from "../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/category.entity/redux/api";

const AccountComponent = () => {
	return (
		<WidgetUpdateAccount
			useGetAllCategoryQuery={useGetAllCategoryQuery}
			useUpdateUserMutation={useUpdateUserMutation}
			useAddProductMutation={useAddProductMutation}
			useGetProductByInfluencerIdQuery={useGetProductByInfluencerIdQuery}
			useGetAllUserQuery={useGetAllUserQuery}
		/>
	);
};

export default AccountComponent;

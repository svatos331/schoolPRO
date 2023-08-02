import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { WidgetUpdateAccountType } from "./type";
import * as ST from "./styled";
import ModuleSide from "./modules/ModuleSide";
import ModuleUpdateArea from "./modules/ModuleUpdateArea";
import ModuleUpdateNav from "./modules/ModuleUpdateNav";
import ModuleUpdatePassword from "./modules/ModuleUpdatePassword";
import ModuleShop from "./modules/ModuleShop";
import { enumModule } from "./enum";
import { useAppSelector } from "../../../../../business.InterfaceLayer/store/services/hooks/redux";
import {
	IUserEnum,
	userActions,
} from "../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import { categoryActions } from "../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/category.entity/redux/slice";
import { productActions } from "../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/product.entity/redux/slice";
import { useGetAllProductQuery } from "../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/product.entity/redux/api";

const WidgetUpdateAccount: FunctionComponent<WidgetUpdateAccountType> = ({
	useUpdateUserMutation,
	useAddProductMutation,
	useGetAllCategoryQuery,
	useGetProductByInfluencerIdQuery,
	useGetAllUserQuery,
}) => {
	const dispatch = useDispatch();
	const { data: allProducts } = useGetAllProductQuery();
	const { data: allUsers } = useGetAllUserQuery();
	dispatch(productActions.changeAllProducts(allProducts));
	dispatch(userActions.setAllUsers(allUsers));
	const { data: myProducts } = useGetProductByInfluencerIdQuery(
		useAppSelector((state) => state.user[IUserEnum.id])
	);
	dispatch(productActions.changeMyProducts(myProducts));

	const { data: categories } = useGetAllCategoryQuery();
	useEffect(() => {
		if (categories && categories.length > 0)
			dispatch(categoryActions.setAllCategory(categories));
	}, [categories]);

	const [module, setModule] = useState<enumModule>(enumModule.Info);
	const uType = useAppSelector((state) => state.user[IUserEnum.userType]);
	const chooseModule = () => {
		if (module == enumModule.Shop)
			if (uType == 0)
				return <ModuleShop useAddProductMutation={useAddProductMutation} />;
			else return <p>Вы обычный пользователь!</p>;
		if (module == enumModule.Password)
			return (
				<ModuleUpdatePassword useUpdateUserMutation={useUpdateUserMutation} />
			);
		else
			return <ModuleUpdateArea useUpdateUserMutation={useUpdateUserMutation} />;
	};

	return (
		<ST.bg_div>
			<ST.cont>
				<ModuleSide />
				<ST.moduleDivRight>
					<ModuleUpdateNav
						module={module}
						setModule={setModule}
					/>
					{chooseModule()}
				</ST.moduleDivRight>
			</ST.cont>
		</ST.bg_div>
	);
};

export default WidgetUpdateAccount;

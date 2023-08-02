import React, { FunctionComponent } from "react";

import * as ST from "./styled/index";
import { ListProductsType } from "./type";
import ModuleInfluencerProducts from "./modules/ModuleInfluencerProducts";
import ModuleFilterProducts from "./modules/ModuleFilterProducts";

const ListProducts: FunctionComponent<ListProductsType> = ({
	useGetAllUserQuery,
	influenserId = undefined,
}) => {
	if (influenserId === undefined) {
		const { data: allUsers, isSuccess } = useGetAllUserQuery();
		const influensersId: number[] = [];
		if (isSuccess) {
			allUsers.map((user: { userType: number; id: number }) => {
				if (user.userType == 0) influensersId.push(user.id);
			});
		}

		return (
			<ST.bg_div>
				<ModuleFilterProducts />
				<ModuleInfluencerProducts influensersId={influensersId} />
			</ST.bg_div>
		);
	} else {
		return (
			<ST.bg_div>
				<ModuleFilterProducts />
				<ModuleInfluencerProducts influensersId={influenserId} />
			</ST.bg_div>
		);
	}
};

export default ListProducts;

import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import * as ST from "../styled/index";
import { ModuleInfluencerProductsType } from "../type";
import { useAppSelector } from "../../../../../../business.InterfaceLayer/store/services/hooks/redux";
import { ProductCardMolecule } from "../../../UI_KIT/Molecules/ProductCard.molecule";
import { ICategoryEnum } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/category.entity/redux/slice";

const ModuleInfluencerProducts: FunctionComponent<
	ModuleInfluencerProductsType
> = ({ influensersId }) => {
	const allProducts = useAppSelector((state) => state.product.allProducts);
	const getUsername = useAppSelector((state) => state.user.allUsers);
	const allCategory = useAppSelector(
		(state) => state.category[ICategoryEnum.allCategory]
	);
	const filter = useAppSelector((state) => state.product.filter);

	const filtered = allProducts.filter(
		(prod) =>
			((filter.categories.length > 0 &&
				filter.categories.includes(Number(prod.category))) ||
				filter.categories.length == 0) &&
			Number(prod.price) <= filter.maxPrice &&
			prod.name.toLowerCase().includes(filter.str.toLowerCase())
	);

	const listProducts = [];

	if (typeof influensersId === "number") {
		const prods = filtered.filter((product) => {
			return product.influencerId == influensersId;
		});
		if (prods.length > 0)
			listProducts.push({
				userId: influensersId,
				products: prods,
			});
	} else {
		for (const id of influensersId) {
			const prods = filtered.filter((product) => {
				return product.influencerId == id;
			});
			if (prods.length > 0)
				listProducts.push({
					userId: id,
					products: prods,
				});
		}
	}

	return (
		<ST.divList>
			{listProducts.map((userProd) => (
				<div key={userProd.userId}>
					<Link to={`/viktoriaGamayunova/shop/${userProd.userId}`}>
						{
							getUsername.filter((user) => user.id == userProd.userId)[0]
								.username
						}
					</Link>
					<ST.divCards>
						{userProd.products.map((prod) => (
							<Link
								key={prod.id}
								to={`/viktoriaGamayunova/product/${prod.id}`}
							>
								<ProductCardMolecule
									img={prod.photo}
									name={prod.name}
									rating={prod.rating}
									category={
										allCategory.filter((cat) => cat.id == prod.category)[0].name
									}
									price={Number(prod.price)}
								/>
							</Link>
						))}
					</ST.divCards>
				</div>
			))}
		</ST.divList>
	);
};

export default ModuleInfluencerProducts;

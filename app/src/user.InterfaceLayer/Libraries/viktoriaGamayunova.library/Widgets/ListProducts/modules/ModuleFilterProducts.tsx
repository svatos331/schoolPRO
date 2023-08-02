import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import * as ST from "../styled/index";
// import { FilterProductsType } from "./type";
import { Line } from "../../../UI_KIT/Atoms/Line";
import { useAppSelector } from "../../../../../../business.InterfaceLayer/store/services/hooks/redux";
import { CheckBox } from "../../../UI_KIT/Atoms/CheckBox";
import { productActions } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/product.entity/redux/slice";
import { ICategoryEnum } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/category.entity/redux/slice";

const ModuleFilterProducts: FunctionComponent = () => {
	const dispatch = useDispatch();
	const store_cats = useAppSelector(
		(state) => state.category[ICategoryEnum.allCategory]
	);

	const def_maxprice = 1000;
	const def_filterCategory: number[] = [];
	const def_findStr = "";
	const cats_default = store_cats.reduce(function (newArr, cat) {
		newArr.push({ name: cat.name, id: cat.id, checked: false });

		return newArr;
	}, []);

	const [cats, setCats] = useState(cats_default);

	const updateCheckStatus = (id: number) => {
		setCats(
			cats.map((cat: { checked: boolean; id: number }) =>
				cat.id == id ? { ...cat, checked: !cat.checked } : cat
			)
		);
	};

	const [maxPrice, setMaxPrice] = useState(def_maxprice);
	const [filterCategory, setFilterCategory] =
		useState<number[]>(def_filterCategory);
	const [findStr, setFindStr] = useState(def_findStr);

	useEffect(() => {
		dispatch(
			productActions.changeFilter({
				maxPrice: maxPrice,
				str: findStr,
				categories: filterCategory,
			})
		);
	}, [maxPrice, filterCategory, findStr]);

	useEffect(() => {
		const tmp = cats.reduce(function (
			newArr: number[],
			cat: { checked: boolean; id: number }
		) {
			if (cat.checked) newArr.push(cat.id);

			return newArr;
		},
		[]);
		setFilterCategory(tmp);
	}, [cats]);

	const all = useAppSelector((state) => state.product.allProducts);
	const maximum = all.reduce(function (prev, current) {
		return prev.price > current.price ? prev : current;
	}).price;
	const minimum = all.reduce(function (prev, current) {
		return prev.price < current.price ? prev : current;
	}).price;

	return (
		<ST.form onSubmit={(e) => e.preventDefault()}>
			<p>Find</p>
			<input
				type="text"
				onChange={(e) => setFindStr(e.target.value)}
				value={findStr}
				onSubmit={(e) => e.preventDefault()}
				placeholder={"Enter something"}
			/>
			<Line />
			<p>Budget</p>
			<input
				type="range"
				min={minimum}
				max={maximum + 1000}
				onChange={(e) => setMaxPrice(Number(e.target.value))}
				value={maxPrice}
				onSubmit={(e) => e.preventDefault()}
			/>
			<div>
				{minimum} - {maximum}
			</div>
			Максимальная цена: {maxPrice}
			<Line />
			<p>Product type</p>
			{cats.map((cat: { id: number; name: string }) => (
				<CheckBox
					key={cat.id}
					cat={cat}
					handleChangeCat={() => updateCheckStatus(cat.id)}
					isChecked={cats.checked}
				/>
			))}
		</ST.form>
	);
};

export default ModuleFilterProducts;

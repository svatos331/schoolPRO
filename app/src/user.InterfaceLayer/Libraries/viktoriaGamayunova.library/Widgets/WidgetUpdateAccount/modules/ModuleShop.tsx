import React, { FunctionComponent, useState } from "react";

import * as ST from "../styled/index";
import { BtnsUpdResetMolecule } from "../../../UI_KIT/Molecules/BtnsUpdReset.molecule";
import { InputUpd } from "../../../UI_KIT/Atoms/InputUpd";
import { Avatar } from "../../../UI_KIT/Atoms/Avatar";
import { TxtArea } from "../../../UI_KIT/Atoms/TxtArea";
import { ModuleShopType } from "../type";
import { useAppSelector } from "../../../../../../business.InterfaceLayer/store/services/hooks/redux";
import { IUserEnum } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import prod_photo from "../../../assets/icons/prod_photo.svg";
import { Line } from "../../../UI_KIT/Atoms/Line";
import { SelectCategory } from "../../../UI_KIT/Atoms/SelectCategory";

const ModuleShop: FunctionComponent<ModuleShopType> = ({
	useAddProductMutation,
}) => {
	const [create_product] = useAddProductMutation();
	const categories = useAppSelector((state) => state.category.allCategory);
	const initProd = {
		category: categories[0].id,
		details: "",
		price: 0,
		name: "",
		photo: "",
		influencerId: useAppSelector((state) => state.user[IUserEnum.id]),
		rating: 0,
	};
	const [prodInfo, setProdInfo] = useState(initProd);

	const resetFields = () => {
		setProdInfo(initProd);
	};
	const editProdInfo = (prop: any, event: any) => {
		if (prop == "price")
			setProdInfo({ ...prodInfo, ...{ [prop]: Number(event.target.value) } });
		else setProdInfo({ ...prodInfo, ...{ [prop]: event.target.value } });
	};
	const create = () => {
		create_product(prodInfo);
		resetFields();
		alert("Created!");
	};
	const on_select = (e: { target: { value: number } }) => {
		setProdInfo({ ...prodInfo, ...{ category: e.target.value } });
	};

	return (
		<>
			<ST.divInfo>
				<ST.divField>
					<ST.Label>Product Image</ST.Label>
					<InputUpd
						type={"text"}
						placeholder={"Enter URL of picture"}
						onChange={(e: any) => editProdInfo("photo", e)}
						value={prodInfo.photo}
					/>
				</ST.divField>
				<Avatar
					src={prodInfo.photo != "" ? prodInfo.photo : prod_photo}
					alt=""
					width="128px"
					height="128px"
				/>
				<Line />
				<ST.divField>
					<ST.Label>Name</ST.Label>
					<InputUpd
						type={"text"}
						placeholder={""}
						onChange={(e: any) => editProdInfo("name", e)}
						value={prodInfo.name}
					/>
				</ST.divField>
				<ST.divField>
					<ST.Label>Price</ST.Label>
					<InputUpd
						type={"text"}
						placeholder={""}
						onChange={(e: any) => editProdInfo("price", e)}
						value={prodInfo.price.toString()}
					/>
				</ST.divField>
				<ST.divField>
					<ST.Label>Category</ST.Label>
					<SelectCategory
						onChange={(e: any) => on_select(e)}
						options={categories}
						value={prodInfo.category}
					/>
				</ST.divField>
			</ST.divInfo>
			<ST.divField>
				<ST.Label>Product details</ST.Label>
				<TxtArea
					placeholder={"Enter the description of product"}
					onChange={(e: any) => editProdInfo("details", e)}
					value={prodInfo.details}
				/>
			</ST.divField>
			<BtnsUpdResetMolecule
				type={"button"}
				textUpd={"Upload Product"}
				textReset={"Reset"}
				onClickReset={resetFields}
				onClickUpd={create}
			/>
		</>
	);
};

export default ModuleShop;

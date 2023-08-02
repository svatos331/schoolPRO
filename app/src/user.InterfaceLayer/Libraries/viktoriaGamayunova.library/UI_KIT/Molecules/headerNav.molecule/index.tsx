import React, { FC } from "react";
import { Link } from "react-router-dom";

import * as ST from "./styled";
import headerNavType from "./type/type";
import avatar from "../../../assets/icons/avatar.svg";
import { Avatar } from "../../Atoms/Avatar";
import { ImageHeader } from "../../Atoms/ImageBtn";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Notice } from "../../../assets/icons/notice.svg";
import { ReactComponent as Cart } from "../../../assets/icons/cart.svg";

export const HeaderNavMolecule: FC<headerNavType> = ({ username, userImg }) => {
	return (
		<ST.container>
			<ST.container_btns>
				<Link to={"/viktoriaGamayunova/products"}>
					<ImageHeader img={<Heart />} />
				</Link>
				<Link to={"/viktoriaGamayunova/products"}>
					<ImageHeader img={<Notice />} />
				</Link>
				<Link to={"/viktoriaGamayunova/products"}>
					<ImageHeader
						img={<Cart />}
						color_fill={true}
					/>
				</Link>
			</ST.container_btns>
			<ST.linkToAcc to={"/viktoriaGamayunova/account"}>
				<Avatar
					src={userImg != "" ? userImg : avatar}
					//https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg
					alt=""
					width="32px"
					height="32px"
					isSmall={true}
				/>
				<ST.username>{username}</ST.username>
			</ST.linkToAcc>
		</ST.container>
	);
};

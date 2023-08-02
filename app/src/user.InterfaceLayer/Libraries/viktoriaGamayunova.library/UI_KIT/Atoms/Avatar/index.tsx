import React, { FC } from "react";

import * as ST from "./styled";
import AvatarType from "./type/type";

export const Avatar: FC<AvatarType> = ({
	src,
	alt = "",
	width = "128px",
	height = "128px",
	isSmall = false,
}) => {
	return (
		<>
			<ST.AvatarDiv
				isSmall={isSmall}
				h={height}
				w={width}
			>
				<ST.AvatarDivSmall>
					<ST.AvatarImg
						src={src}
						alt={alt}
					/>
				</ST.AvatarDivSmall>
			</ST.AvatarDiv>
		</>
	);
};

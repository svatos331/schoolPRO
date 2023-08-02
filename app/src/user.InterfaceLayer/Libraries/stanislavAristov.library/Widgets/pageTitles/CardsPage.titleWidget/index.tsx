import React, { FC } from "react";

import * as ST from "./styled";
import { ICardsPageTitleWidgetProps } from "./type";
import Typography_Montserrat_Normal from "../../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import Colors from "../../../../../constants/colors";
import EFontClasses from "../../../../../constants/fontsClasses";
import UserLogo from "../../../UI_KIT/Molecules/UserLogo";
import { ICardsPageTitleWidgetDefaultProps } from "./const";
import GoBackWidget from "../../goBackWidget/GoBackWidget";

const CardsPageTitleWidget: FC<ICardsPageTitleWidgetProps> = ({
	title,
	getMe,
}) => {
	const { data: userBaseData, isLoading } = getMe(null);

	return (
		<ST.Menu>
			<ST.MenuHeader>
				<GoBackWidget />
				<UserLogo
					isLoading={isLoading}
					image={userBaseData?.src ?? undefined}
				/>
			</ST.MenuHeader>
			<ST.MenuTitle>
				<Typography_Montserrat_Normal
					color={Colors.WHITE}
					className={EFontClasses.MainTextMont24_28_413_900}
					text={title ?? ""}
				/>
			</ST.MenuTitle>
		</ST.Menu>
	);
};
CardsPageTitleWidget.defaultProps = ICardsPageTitleWidgetDefaultProps;
export default CardsPageTitleWidget;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, startTransition } from "react";
import { useNavigate } from "react-router-dom";

import * as ST from "./styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICardsPageTitleWidgetProps } from "./type";
import Button from "../../../UI_KIT/Atoms/Button";
import menuLogo from "../../../assets/icons/arrow/straght/Left-Arrow.svg";
import Typography_Montserrat_Normal from "../../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import Colors from "../../../../../constants/colors";
import EFontClasses from "../../../../../constants/fontsClasses";
import UserLogo from "../../../UI_KIT/Molecules/UserLogo";
import { ICardsPageTitleWidgetDefaultProps } from "./const";
import { useGetBaseInfoAboutMeQuery } from "../../../../../../business.InterfaceLayer/store/shared/entities/aristovStanislav.entities/payments.entity/redux/api";
import GoBackWidget from "../../goBackWidget/GoBackWidget";
const CardsPageTitleWidget: FC<ICardsPageTitleWidgetProps> = ({
	title,
	getMe,
}) => {
	const { data: userBaseData, isLoading } = useGetBaseInfoAboutMeQuery({});

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

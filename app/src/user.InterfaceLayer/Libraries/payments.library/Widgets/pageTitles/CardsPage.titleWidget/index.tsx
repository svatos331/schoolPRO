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
import { useGetBaseInfoAboutMeQuery } from "../../../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";
const CardsPageTitleWidget: FC<ICardsPageTitleWidgetProps> = ({
	title,
	getMe,
}) => {
	const navigate = useNavigate();
	const { data: userBaseData, isLoading } = useGetBaseInfoAboutMeQuery({});

	return (
		<ST.Menu>
			<ST.MenuHeader>
				<Button
					onClick={() => {
						if (window.history.state && window.history.state.idx > 0) {
							navigate(-1);
						} else {
							navigate("/", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
						}
					}}
					hasIcon={true}
					icon={menuLogo}
				/>
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

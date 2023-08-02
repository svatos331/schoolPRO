// eslint-disable-next-line @typescript-eslint/no-unused-vars,import/order
import React, { FC } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { useTranslation } from "react-i18next";

import * as ST from "./styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IHomePageTitleWidgetProps } from "./type";
import Button from "../../../UI_KIT/Atoms/Button";
import menuLogo from "../../../assets/icons/HamburgerMenu.svg";
import Typography_Montserrat_Normal from "../../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import Colors from "../../../../../constants/colors";
import EFontClasses from "../../../../../constants/fontsClasses";
import UserLogo from "../../../UI_KIT/Molecules/UserLogo";
import "../../../../../Components/StanislavAristov.components.bll/i18n";
const HomePageTitleWidget: FC<IHomePageTitleWidgetProps> = ({
	openFunc,
	getMe,
}) => {
	const { data: user, isLoading } = getMe({});
	const { t } = useTranslation();

	return (
		<ST.Menu>
			<ST.MenuHeader>
				<Button
					onClick={() => {
						// eslint-disable-next-line no-console
						openFunc();
					}}
					hasIcon={true}
					icon={menuLogo}
				/>
				<UserLogo
					image={user?.src ?? undefined}
					isLoading={isLoading}
				/>
			</ST.MenuHeader>
			<ST.MenuTitle>
				<Typography_Montserrat_Normal
					color={Colors.WHITE}
					className={EFontClasses.MainTextMont24_28_413_900}
					text={t("goodMorning")}
				/>
				<Typography_Montserrat_Normal
					color={Colors.WHITE}
					className={EFontClasses.MainTextMont24_28_413_900}
					text={`${user?.id ?? 0},`}
				/>
			</ST.MenuTitle>
		</ST.Menu>
	);
};
export default HomePageTitleWidget;

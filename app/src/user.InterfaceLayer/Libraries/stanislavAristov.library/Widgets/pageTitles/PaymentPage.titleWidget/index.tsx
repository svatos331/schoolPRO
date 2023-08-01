import React, { FC } from "react";

import * as ST from "./styled";
import { ICardsPageTitleWidgetProps } from "./type";
import Typography_Montserrat_Normal from "../../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import Colors from "../../../../../constants/colors";
import EFontClasses from "../../../../../constants/fontsClasses";
import { IPaymentPageTitleWidgetDefaultProps } from "./const";
import GoBackWidget from "../../goBackWidget/GoBackWidget";
const PaymentPageTitleWidget: FC<ICardsPageTitleWidgetProps> = ({ title }) => {
	return (
		<ST.Menu>
			<ST.MenuHeader>
				<GoBackWidget />
			</ST.MenuHeader>
			<ST.MenuTitle>
				<Typography_Montserrat_Normal
					color={Colors.WHITE}
					className={EFontClasses.SecondaryTextPTSanBold15_18_413_900}
					text={title ?? ""}
				/>
			</ST.MenuTitle>
		</ST.Menu>
	);
};
PaymentPageTitleWidget.defaultProps = IPaymentPageTitleWidgetDefaultProps;
export default PaymentPageTitleWidget;

import React, { useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";

import BalanceWidget from "../../../Libraries/stanislavAristov.library/Widgets/ballanceBlock/modules/ballanceWidget";
import PrimaryButton from "../../../Libraries/stanislavAristov.library/UI_KIT/Molecules/PrimaryButton";
import arrow from "../../../Libraries/stanislavAristov.library/assets/icons/arrow/nonstraingt/SmallArrow.svg";
import Colors from "../../../constants/colors/index";
import { CheckBalance } from "../../../Pages/AristovStanislav.pages/Home.page/style";
import {
	useGetBaseInfoAboutMeQuery,
	useGetMeQuery,
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";
import BalanceBlock from "../../../Libraries/stanislavAristov.library/Widgets/ballanceBlock";
import EFontClasses from "../../../constants/fontsClasses";
import Typography_Montserrat_Normal from "../../../Libraries/stanislavAristov.library/UI_KIT/Molecules/Typographies/Montserrat/Normal";
import HomePageTitleWidget from "../../../Libraries/stanislavAristov.library/Widgets/pageTitles/HomePage.titleWidget";
import { sidebarActions } from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/sidebar.entity/redux/slice";
import { useAppDispatch } from "../../../../business.InterfaceLayer/store/services/hooks/redux";

const HomePageTitleComponent = () => {
	const dispatch = useAppDispatch();
	const { pickOpen } = sidebarActions;

	return (
		<HomePageTitleWidget
			openFunc={() => dispatch(pickOpen())}
			getMe={useGetBaseInfoAboutMeQuery}
		/>
	);
};

export default HomePageTitleComponent;
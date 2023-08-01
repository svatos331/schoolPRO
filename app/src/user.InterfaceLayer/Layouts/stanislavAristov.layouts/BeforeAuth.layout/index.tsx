// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, JSX } from "react";
import { Outlet } from "react-router-dom";

import * as ST from "./styled";
// import WelcomeAuth from "../../../Libraries/svyatoslavZhilnRoutesPaths.library/Widgets/welcomeAuth";
import AbsoluteGradientBlockBig from "../../../Libraries/stanislavAristov.library/UI_KIT/Molecules/AbsoluteBlockGradientBig";
import AbsoluteAuthBlock from "../../../Libraries/stanislavAristov.library/UI_KIT/Molecules/AbsoluteAuthBlock";
import AuthWidget from "../../../Libraries/stanislavAristov.library/Widgets/authWidget";

const BeforeAuthLayout: FC<{ children?: JSX.Element | string }> = ({
	children,
}) => (
	<ST.BeforeAuthLayout>
		<AbsoluteGradientBlockBig />

		<AbsoluteAuthBlock />
		<main>
			{children}
			{children ? null : <Outlet />}
		</main>
	</ST.BeforeAuthLayout>
);

export default BeforeAuthLayout;

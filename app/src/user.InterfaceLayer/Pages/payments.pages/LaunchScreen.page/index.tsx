import React, { FC } from "react";

import * as ST from "./style";
import LogoColorFullWithText from "../../../Libraries/payments.library/UI_KIT/Molecules/LogoColorFullWithText";

const LaunchScreen: FC = () => (
	<ST.LaunchScreen className="d-f f-center">
		<ST.Logo>
			<LogoColorFullWithText />
		</ST.Logo>
	</ST.LaunchScreen>
);

export default LaunchScreen;

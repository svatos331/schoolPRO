import React, { FunctionComponent } from "react";

import * as ST from "../styled/index";
import { ModuleNav } from "../type";
import { enumModule } from "../enum";
import { BtnUpdateNav } from "../../../UI_KIT/Atoms/BtnUpdateNav";

const ModuleUpdateNav: FunctionComponent<ModuleNav> = ({
	module,
	setModule,
}) => {
	return (
		<ST.divNav>
			<BtnUpdateNav
				text={"Account Setting"}
				onClick={() => {
					setModule(enumModule.Info);
				}}
				isFocus={module == 0}
			/>
			<BtnUpdateNav
				text={"Login & Security"}
				onClick={() => {
					setModule(enumModule.Password);
				}}
				isFocus={module == 1}
			/>
			<BtnUpdateNav
				text={"Shop"}
				onClick={() => {
					setModule(enumModule.Shop);
				}}
				isFocus={module == 2}
			/>
		</ST.divNav>
	);
};

export default ModuleUpdateNav;

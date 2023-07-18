import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: FC = () => (
	// <div>
	// 	<div>
	// 		<Link to={"/viktoriaGamayunova/sign_in"}>sign_in</Link>
	// 	</div>
	// 	<div>
	// 		<Link to={"/viktoriaGamayunova/last"}>last</Link>
	// 	</div>
	// 	<div>
	// 		<Link to={"/viktoriaGamayunova"}>main</Link>
	// 	</div>
	// 	ViktoriaGamayunovaMainLayout <Outlet />
	// </div>

	<div>
		<div>
			<Link to={"/viktoriaGamayunova/sign_in"}>Начать</Link>
		</div>{" "}
		<Outlet />
	</div>
);

export default MainLayout;

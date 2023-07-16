import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: FC = () => (
	<div>
		<div>
			<Link to={"/kirillKornilov/last"}>last</Link>
		</div>
		<div>
			<Link to={"/kirillKornilov"}>main</Link>
		</div>
		<div>
			<Link to={"/kirillKornilov/sign"}>sign</Link>
		</div>
		KirillKornilov <Outlet />
	</div>
);

export default MainLayout;

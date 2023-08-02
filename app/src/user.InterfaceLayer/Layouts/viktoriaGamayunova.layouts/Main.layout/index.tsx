import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => (
	<div>
		<Outlet />
	</div>
);

export default MainLayout;

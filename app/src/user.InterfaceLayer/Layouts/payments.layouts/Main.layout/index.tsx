import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC<{ children? : JSX.Element}> = ({children}) => (
	<div>
		{children}
		{children ? null : <Outlet/>}
	</div>
);
export default MainLayout;

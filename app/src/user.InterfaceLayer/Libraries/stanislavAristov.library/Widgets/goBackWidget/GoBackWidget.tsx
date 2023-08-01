import React from "react";
import { useNavigate } from "react-router-dom";

import menuLogo from "../../assets/icons/arrow/straght/Left-Arrow.svg";
import Button from "../../UI_KIT/Atoms/Button";

const GoBackWidget = () => {
	const navigate = useNavigate();

	return (
		<Button
			onClick={() => {
				if (window.history.state && window.history.state.idx > 0) {
					navigate(-1);
				} else {
					navigate("/", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
				}
			}}
			hasIcon={true}
			icon={menuLogo}
		/>
	);
};
export default GoBackWidget;

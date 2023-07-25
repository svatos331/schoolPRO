import React from "react";
import { styled } from "styled-components";
import { useKeycloak } from "@react-keycloak/web";

import SecondaryButton from "../../../Libraries/payments.library/UI_KIT/Molecules/SecondaryButton";

const SignoutBtnComponent = () => {
	const { keycloak } = useKeycloak();

	return (
		<SecondaryButton
			text={"Sign out"}
			onClick={keycloak.logout}
		/>
	);
};

export default SignoutBtnComponent;

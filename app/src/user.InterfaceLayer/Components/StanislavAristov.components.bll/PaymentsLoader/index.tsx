import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

import * as ST from "./styled";

const PaymentsLoader = () => (
	<ST.Loader>
		<ProgressSpinner />
	</ST.Loader>
);

export default PaymentsLoader;

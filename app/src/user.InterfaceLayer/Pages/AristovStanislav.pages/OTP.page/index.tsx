import React, { FC, useState } from "react";

import * as ST from "./style/styled";
import otp from "../../../Libraries/stanislavAristov.library/assets/icons/mainIcon/OTP_verification.svg";
import IconElement from "../../../Libraries/stanislavAristov.library/UI_KIT/Atoms/IconElement";
import Typography_Montserrat_Bold from "../../../Libraries/stanislavAristov.library/UI_KIT/Molecules/Typographies/Montserrat/Bold";
import EFontClasses from "../../../constants/fontsClasses";
import VerifierWidget from "../../../Libraries/stanislavAristov.library/Widgets/verifierWidget";

const OTPPage: FC = () => {
	const [isWaitingCode, setIsWaitingCode] = useState(false);

	return (
		<ST.OTPPageWrapper>
			<ST.OTPImg>
				<IconElement src={otp} />
			</ST.OTPImg>
			<ST.Title>
				<Typography_Montserrat_Bold
					className={EFontClasses.MainTextMont24_28_413_900}
					text={"OTP Verification"}
				/>
			</ST.Title>
			<VerifierWidget
				isWaitingCode={isWaitingCode}
				setIsWaiting={setIsWaitingCode}
			/>
		</ST.OTPPageWrapper>
	);
};
export default OTPPage;

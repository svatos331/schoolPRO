// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

import * as ST from "./styled";
import WelcomeAuth from "../../../Libraries/payments.library/Widgets/welcomeAuth";
import AbsoluteGradientBlockBig from "../../../Libraries/payments.library/UI_KIT/Molecules/AbsoluteBlockGradientBig";
import AbsoluteAuthBlock from "../../../Libraries/payments.library/UI_KIT/Molecules/AbsoluteAuthBlock";

const WelcomeBackPage: FC = () =>
    (
        <ST.WelcomeBackPage>
            <AbsoluteGradientBlockBig/>

            <AbsoluteAuthBlock/>
            <main>
                {/*тут будет outlet*/}
                <WelcomeAuth/>

            </main>
        </ST.WelcomeBackPage>
    );

export default WelcomeBackPage;

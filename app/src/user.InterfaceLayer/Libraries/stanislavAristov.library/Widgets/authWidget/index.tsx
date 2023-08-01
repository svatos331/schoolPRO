
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";
import {InputText} from "primereact/inputtext";
import {Message} from "primereact/message";

import rArraw from "../../assets/icons/arrow/straght/Right-Arrow.svg";
import PrimaryButton from "../../UI_KIT/Molecules/PrimaryButton";
import * as ST from "./styled";
import Typography_Montserrat_Bold from "../../UI_KIT/Molecules/Typographies/Montserrat/Bold";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IAuthWidgetProps} from "./type/IAuthWidgetProps";
import {IAuthWidgetPropsDefault} from "./const/IAuthWidgetPropsDefault";
const AuthWidget :FC<IAuthWidgetProps>= ({title="", onSubmit}) => {
    return (<ST.AuthWidgetWrapper>
        <ST.Header>
            <Typography_Montserrat_Bold text={title}/>
        </ST.Header>
        <div className="card">
            <div className="flex flex-wrap align-items-center mb-3 gap-2">
                <label htmlFor="username" className="p-sr-only">Username</label>
                <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
                <Message severity="error" text="Username is required" />
            </div>
            <div className="flex flex-wrap align-items-center gap-2">
                <label htmlFor="email" className="p-sr-only">Email</label>
                <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
                <Message severity="error" />
            </div>
        </div>
        <PrimaryButton
            contentposition={"between"}
            hasIcon={true}
            icon={rArraw}
            width={"100%"}
            text={title}
            onClick={() => {
                // eslint-disable-next-line no-console
                onSubmit?.();
            }}

        />



    </ST.AuthWidgetWrapper>);
};
AuthWidget.defaultProps = IAuthWidgetPropsDefault;
export default AuthWidget;
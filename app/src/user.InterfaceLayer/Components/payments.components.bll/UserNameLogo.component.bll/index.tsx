import React from "react";

import UserLogoWidget from "../../../Libraries/payments.library/Widgets/userLogoWidget";
import {
    useGetBaseInfoAboutMeQuery
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";




const UserNameLogoComponent = () => {
    return (
        <UserLogoWidget getMe={useGetBaseInfoAboutMeQuery}/>
    );
};

export default UserNameLogoComponent;

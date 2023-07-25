import React from "react";
import {styled} from "styled-components";
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {QueryDefinition} from "@reduxjs/toolkit/query";

import {
    useGetBaseInfoAboutMeQuery,
} from "../../../../business.InterfaceLayer/store/shared/entities/payments.entities/payments.entity/redux/api";
import SideBarContentWidget from "../../../Libraries/payments.library/Widgets/sideBarContent";


const SideBarContentComponent = () => {


    return (
        <>
            <SideBarContentWidget getMe={useGetBaseInfoAboutMeQuery}/>
        </>
    );
};

export default SideBarContentComponent;

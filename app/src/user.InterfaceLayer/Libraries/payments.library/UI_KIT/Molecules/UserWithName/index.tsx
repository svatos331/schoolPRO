// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from "styled-components";
import * as ST from "./styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IUserWithNameProps} from "./type";
import UserLogo from "../UserLogo";
import Typography_PTSan_Normal from "../Typographies/PTsan/Normal";
import EFontClasses from "../../../../../constants/fontsClasses";


const UserWithName: FC<IUserWithNameProps> = ({src, name}) => {


    return (
        <ST.UserWithNameWrapper>
            <UserLogo image={src}/>
            <Typography_PTSan_Normal text={name} className={EFontClasses.SecondaryTextPTSanBold15_18_413_900}/>
        </ST.UserWithNameWrapper>
    );
};
export default UserWithName;
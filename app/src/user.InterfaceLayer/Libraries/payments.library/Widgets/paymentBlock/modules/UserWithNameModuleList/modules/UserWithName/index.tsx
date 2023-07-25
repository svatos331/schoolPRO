// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC, useMemo} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from "styled-components";

import * as ST from "./styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IUserWithNameProps} from "./type";
import UserLogo from "../../../../../../UI_KIT/Molecules/UserLogo";
import Typography_PTSan_Normal from "../../../../../../UI_KIT/Molecules/Typographies/PTsan/Normal";
import EFontClasses from "../../../../../../../../constants/fontsClasses";
import {useAppSelector} from "../../../../../../../../../business.InterfaceLayer/store/services/hooks/redux";


const UserWithName: FC<IUserWithNameProps> = ({id, setSelected,src, name}) => {

    const selected = useAppSelector(state=>state.payments.selectedUserId);
    const isSelected = useMemo(() => {
        return selected === id;
    }, [selected,id]);

    return (
        <ST.UserWithNameWrapper $isSelected = {isSelected} onClick = {setSelected}>
            <UserLogo image={src}/>
            <Typography_PTSan_Normal text={name} className={EFontClasses.SecondaryTextPTSanBold15_18_413_900}/>
        </ST.UserWithNameWrapper>
    );
};
export default UserWithName;
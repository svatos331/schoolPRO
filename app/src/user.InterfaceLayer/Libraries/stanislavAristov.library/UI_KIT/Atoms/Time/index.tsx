import React, {FC, useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styled} from "styled-components";

import * as ST from "./styled";
import {ITimeProps} from "./type";
import Typography from "../Typograpgy";
import {useCurrentDate} from "./utils";
import Colors from "../../../../../constants/colors/index";


const Time: FC<ITimeProps> = ({isDark = false}) => {
    const [curDate, setCurDate] = useState(() => useCurrentDate(new Date()).curDate);
    useEffect(() => {
        const id = setInterval(() => {
            const {curDate: cur} = useCurrentDate(new Date());
            setCurDate(() => cur);
        }, 60000);

        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <ST.TimeWrapper>
            <Typography as="p" color={isDark?Colors.BLACK : Colors.WHITE}>
                {curDate}
            </Typography>
        </ST.TimeWrapper>
    );
};
Time.defaultProps = {
    isDark: false
};
export default Time;
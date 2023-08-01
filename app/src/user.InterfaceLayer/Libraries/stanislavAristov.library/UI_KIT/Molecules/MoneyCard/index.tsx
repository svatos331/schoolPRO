import React, { FC, useMemo } from "react";

import * as ST from "./styled/index";
import { IMoneyCardProps } from "./type";
import Typography_Montserrat_Bold from "../Typographies/Montserrat/Bold";
import Colors from "../../../../../constants/colors";
import EFontClasses from "../../../../../constants/fontsClasses";
import Typography_Montserrat_Normal from "../Typographies/Montserrat/Normal";
import IconElement from "../../Atoms/IconElement";
import masterCard from "../../../assets/icons/cards/masterCardLogosvg.svg";
import { ICardDTO } from "../../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/services/dto/from.dto";
const MoneyCard: FC<IMoneyCardProps | ICardDTO> = ({
	balance,
	bank,
	type,
	createDate,
	number,
}) => {
	const privateNumber = useMemo(() => {
		return number.replace(/(\d{4})(?=\d{4})/g, "**** ");
	}, []);

	return (
		<ST.MoneyCardWrapper>
			<ST.Header>
				<Typography_Montserrat_Bold
					className={EFontClasses.MainTextMont24_28_413_900}
					color={Colors.WHITE}
					text={"$" + balance}
				/>
				<Typography_Montserrat_Bold
					className={EFontClasses.SecondaryTextPTSanBold15_18_413_900}
					color={Colors.WHITE}
					text={type}
				/>
			</ST.Header>
			<ST.Footer>
				<Typography_Montserrat_Normal
					color={Colors.WHITE}
					className={EFontClasses.SecondaryText14_16_413_900}
					text={createDate}
				/>
				<ST.Private>
					<Typography_Montserrat_Normal
						color={Colors.WHITE}
						className={EFontClasses.SecondaryText14_16_413_900}
						text={privateNumber}
					/>
					<IconElement src={masterCard} />
				</ST.Private>
			</ST.Footer>
		</ST.MoneyCardWrapper>
	);
};

export default MoneyCard;

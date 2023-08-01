import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import {
	InputNumber,
	InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { Toast } from "primereact/toast";

import * as ST from "./styled/index";
import { IPaymentBlockProps } from "./type";
import Typography_Montserrat_Normal from "../../UI_KIT/Molecules/Typographies/Montserrat/Normal";
import Colors from "../../../../constants/colors";
import EFontClasses from "../../../../constants/fontsClasses";
import UserWithNameWidget from "./modules/UserWithNameModuleList";
import KeyBoardModule from "./modules/KeyBoardModule";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../../../business.InterfaceLayer/store/services/hooks/redux";
import { paymentsActions } from "../../../../../business.InterfaceLayer/store/shared/entities/stanislavAristov.entities/payments.entity/redux/slice";

const PaymentBlock: FC<IPaymentBlockProps> = ({
	putMoney,
	selectedUserIdSelector,
	paySumSelector,
	getMe,
	getUsers,
}) => {
	const [
		putMoneyMutation,
		{ isLoading: isPutMoneyLoading, isError: isPutMoneyError },
	] = putMoney();
	const {
		data: me,
		isLoading: isBalanceLoading,
		isError: isGetMeError,
	} = getMe({});
	const [sum, setSum] = useState<number>(() => 0 | 0);
	const { changePaySum } = paymentsActions;
	const selectedUserId = useAppSelector(selectedUserIdSelector);
	const paySum = useAppSelector(paySumSelector);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(changePaySum(sum));
	}, [sum]);

	const toast = useRef<Toast>(null);
	const showSuccess = () => {
		toast.current?.show({
			severity: "success",
			summary: "Success",
			detail: "Оплата прошла успешно",
			life: 3000,
		});
	};
	const showError = () => {
		toast.current?.show({
			severity: "error",
			summary: "Error",
			detail: "Ошибка",
			life: 3000,
		});
	};
	const onKeyBoardItemClick = useCallback(
		(val: string) => {
			setSum((prev) => +("" + prev + val));
		},
		[selectedUserId]
	);
	const [isError, setIsError] = useState<boolean>(false);
	const payFromMeToUser = async (userId: string, sum: number) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (!selectedUserId) {
			showError();
			setIsError(true);

			return;
		}
		await putMoneyMutation({ params: { id: userId }, balance: sum ?? 0 });
		if (isPutMoneyError) {
			showError();
			setIsError(true);

			return;
		} else {
			showSuccess();
			setIsError(false);
		}
	};

	return (
		<ST.PaymentBlock>
			<ST.Input>
				<label htmlFor="urrency-us">
					<Typography_Montserrat_Normal
						className={EFontClasses.SecondaryTextPTSanBold15_18_413_900}
						text={"Enter amount"}
						color={Colors.BLUE}
					/>
				</label>
				<InputNumber
					maxFractionDigits={0}
					min={1}
					inputId="currency-us"
					value={sum | 0}
					onValueChange={(e: InputNumberValueChangeEvent) =>
						setSum(e?.value ?? 0 | 0)
					}
					mode="currency"
					currency="USD"
					locale="en-US"
				/>
			</ST.Input>
			<ST.TOUser>
				<Typography_Montserrat_Normal
					className={EFontClasses.SecondaryText14_16_413_900}
					color={Colors.BLUE}
					text={"To"}
				/>
			</ST.TOUser>
			<UserWithNameWidget
				getAllUsers={getUsers}
				getMe={getMe}
			/>
			<KeyBoardModule
				onSubmitFunc={() => payFromMeToUser(selectedUserId, paySum)}
				onKeyBoardItemClick={onKeyBoardItemClick}
			/>
			<Toast
				baseZIndex={10000}
				ref={toast}
			/>
		</ST.PaymentBlock>
	);
};

export default PaymentBlock;

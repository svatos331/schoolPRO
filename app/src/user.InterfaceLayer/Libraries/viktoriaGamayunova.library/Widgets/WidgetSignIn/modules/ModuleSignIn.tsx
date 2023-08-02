// eslint-disable-next-line import/order
import React, { FunctionComponent, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as ST from "../styled";
import { InputSign } from "../../../UI_KIT/Atoms/InputSign";
import { BtnSign } from "../../../UI_KIT/Atoms/BtnSign";
import { ModuleSignInType } from "../type";
import { userActions } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/user.entity/redux/slice";
import viktoriaGamayunovaRoutesPaths from "../../../../../router/routes/viktoriaGamayunova.route/viktoriaGamayunova.routesPaths";
import { productActions } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/product.entity/redux/slice";
import { categoryActions } from "../../../../../../business.InterfaceLayer/store/shared/entities/viktoriaGamayunova.entities/category.entity/redux/slice";

const ModuleSignIn: FunctionComponent<ModuleSignInType> = ({
	setIsSignIn,
	useLazyGetUserQuery,
}) => {
	const dispatch = useDispatch();
	dispatch(productActions.undefined());
	dispatch(categoryActions.undefined());
	const [getUser, results] = useLazyGetUserQuery();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [correct, setCorrect] = useState(false);
	const navigate = useNavigate();

	const handlerSignIn = () => {
		getUser({
			params: { email: email, password: password },
		});
	};

	useEffect(() => {
		if (correct) {
			navigate(viktoriaGamayunovaRoutesPaths.ACCOUNT);
		}
	}, [navigate, correct]);

	useEffect(() => {
		if (results.status == "fulfilled") {
			if (results.data.length) {
				dispatch(userActions.setUser(results.data[0]));
				setCorrect(true);
			} else {
				alert("error");
				setPassword("");
				setEmail("");
			}
		}
	}, [results]);

	const handlerSignUp = () => {
		setIsSignIn(false);
	};

	return (
		<>
			<ST.divContent>
				<ST.form>
					<ST.p>Welcome Back</ST.p>
					<ST.pSignIn>Sign In</ST.pSignIn>
					<InputSign
						type={"text"}
						placeholder={"email"}
						onChange={(e: any) => setEmail(e.target.value)}
						value={email}
					/>
					<InputSign
						type={"password"}
						placeholder={"password"}
						onChange={(e: any) => setPassword(e.target.value)}
						value={password}
					/>
					<ST.pRight>forgot password?</ST.pRight>
					<BtnSign
						type="button"
						text="Continue"
						onClick={handlerSignIn}
					/>
					<ST.pCenter>don’t have an account?</ST.pCenter>
					<BtnSign
						type="button"
						text="Sign Up"
						onClick={handlerSignUp}
					/>
				</ST.form>
				<ST.divText>
					<ST.pWelcome>Welcome back to Influshop</ST.pWelcome>
					<ST.pTextWelcome>
						Login to get started with Influshop <br /> If not yet registered
						click on sign up <br /> to get started
					</ST.pTextWelcome>
				</ST.divText>
			</ST.divContent>
		</>
	);
};

export default ModuleSignIn;

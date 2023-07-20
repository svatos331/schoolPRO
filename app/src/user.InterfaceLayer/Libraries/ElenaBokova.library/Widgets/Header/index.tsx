import {Link} from "react-router-dom";
import React from "react";
import {StyledNav, StyledNavLink, StyledNavList, StyledSection} from "./styled/styled";
import favorite from "../../assets/icons/favorite.svg"
import cart from "../../assets/icons/cart.svg"
import user from "../../assets/icons/user.svg"
import Logo from "../../UI_KIT/Atoms/Logo";
import {useAppSelector} from "../../../../../business.InterfaceLayer/store/services/hooks/redux"
import Amount from "../../UI_KIT/Atoms/Amount";

const Header = () => {

	const{favoriteAmount} = useAppSelector(state => state.favorite)

	return (
		<StyledSection as="header">
			<StyledNav>
				<Link to={"/elenaBokova"}>
					<Logo />
				</Link>
				<StyledNavList>
					<StyledNavLink>
						<Link to={"/elenaBokova/favorite"}>
							<img src={favorite} alt=""/>
							<Amount>{favoriteAmount}</Amount>
						</Link>
					</StyledNavLink>
					<StyledNavLink>
						<Link to={"/elenaBokova/cart"}>
							<img src={cart} alt=""/>
						</Link>
					</StyledNavLink>
					<StyledNavLink>
						<Link to={"/elenaBokova/auth"}>
							<img src={user} alt=""/>
						</Link>
					</StyledNavLink>
				</StyledNavList>
			</StyledNav>
		</StyledSection>
	)
}

export default Header
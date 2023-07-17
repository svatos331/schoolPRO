import {Link} from "react-router-dom";
import React from "react";
import {StyledSection, StyledNavList, StyledNavLink, StyledNav} from "./styled/styled";
// @ts-ignore
import favorite from "../../assets/icons/favorite.svg"
import cart from "../../assets/icons/cart.svg"
import user from "../../assets/icons/user.svg"
import Logo from "../../UI_KIT/Atoms/Logo";

const Header = () => {
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
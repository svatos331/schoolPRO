import React, { FunctionComponent } from "react";

import * as ST from "./styled/styled";
import { FooterTitle } from "../../UI_KIT/Atoms/FooterTitle";
import { FooterText } from "../../UI_KIT/Atoms/FooterText";
import { FooterLink } from "../../UI_KIT/Atoms/FooterLink";

const Footer: FunctionComponent = () => {
	// const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	// return <div>data from jsonplaceholder : {JSON.stringify(data)}</div>;
	return (
		<ST.footer>
			<ST.ulBlocks>
				<ST.ulInside>
					<ST.li>
						<FooterTitle text="ABOUT US" />
					</ST.li>
					<ST.li>
						<FooterText
							text={`Lorem ipsum dolor sit amet,${"\n"}consectetur adipiscing elit.`}
						/>
					</ST.li>
				</ST.ulInside>
				<ST.ulInside>
					<ST.li>
						<FooterTitle text="INFORMATION" />
					</ST.li>
					<ST.li>
						<FooterLink text={"About"} />
					</ST.li>
					<ST.li>
						<FooterLink text={"Delivery Information"} />
					</ST.li>
				</ST.ulInside>
				<ST.ulInside>
					<ST.li>
						<FooterTitle text="ACCOUNT" />
					</ST.li>
					<ST.li>
						<FooterLink text={"My Account"} />
					</ST.li>
					<ST.li>
						<FooterLink text={"My Orders"} />
					</ST.li>
				</ST.ulInside>
				<ST.ulInside>
					<ST.li>
						<FooterTitle text="STORE" />
					</ST.li>
					<ST.li>
						<FooterLink text={"Affiliate"} />
					</ST.li>
					<ST.li>
						<FooterLink text={"Contact"} />
					</ST.li>
				</ST.ulInside>
				<ST.ulInside>
					<ST.li>
						<FooterTitle text="CONTACT US" />
						<FooterText
							text={`If you have any query, please contact us ${"\n"}influshop@gmail.com`}
						/>
					</ST.li>
				</ST.ulInside>
			</ST.ulBlocks>
		</ST.footer>
	);
};

export default Footer;

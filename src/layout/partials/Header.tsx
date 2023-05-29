import { Brand, ButtonLink } from "components";
import { IoArrowBackCircleSharp } from "react-icons/io5";

type HeaderProps = {
	showHeader?: boolean;
};

export const Header = (props: HeaderProps) => {
	const { showHeader } = props;

	return (
		<header
			className="layout__header"
			style={!showHeader ? { justifyContent: "flex-end" } : undefined}
		>
			{showHeader && (
				<>
					<div className="header-button-container">
						<ButtonLink path="/">
							<IoArrowBackCircleSharp /> Back
						</ButtonLink>
					</div>
					<Brand width={200} />
				</>
			)}

			<div className="header-button-container">
				{/* this is place for some buttons like login, logout, etc. i will add soon */}
			</div>
		</header>
	);
};

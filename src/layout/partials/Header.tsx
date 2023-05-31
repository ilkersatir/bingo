import { Brand, ButtonLink } from "components";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { usePlayerStore } from "stores";

type HeaderProps = {
	showHeader?: boolean;
};

export const Header = (props: HeaderProps) => {
	const { showHeader } = props;

	const { playerBingoCount } = usePlayerStore();

	const opacity = playerBingoCount > 0 ? 1 : 0.5;

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
				<div className={`bingo-count pulse${playerBingoCount}`} style={{ opacity }}>
					Bingo: {playerBingoCount > 0 && "x"}
					{playerBingoCount}
				</div>
			</div>
		</header>
	);
};

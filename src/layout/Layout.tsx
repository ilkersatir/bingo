import { ReactNode, useMemo } from "react";
import { Header, Parallax } from "./partials";
import { ButtonLink, CustomModal } from "components";
import { usePlayerStore } from "stores";
import { useModal } from "hooks";

import Confetti from "react-confetti";

type LayoutProps = {
	showHeader?: boolean;
	children?: ReactNode;
	centered?: boolean;
	contentCentered?: boolean;
};

export const Layout = (props: LayoutProps) => {
	const { showHeader, children, centered } = props;

	const { openModal, isModalOpen } = useModal({
		delay: 200,
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const memoizedHeader = useMemo(() => <Header showHeader={showHeader} />, []);
	const memoizedParallax = useMemo(() => <Parallax />, []);

	const { playerDidWin } = usePlayerStore();
	if (playerDidWin && !isModalOpen) {
		openModal();
	}

	const layoutClassName = `layout__content ${
		centered ? "layout__content--centered" : ""
	}`;

	return (
		<main className="layout">
			{playerDidWin && (
				<Confetti numberOfPieces={250} gravity={0.05} friction={1} opacity={0.8} />
			)}

			<CustomModal isOpen={isModalOpen}>
				<h1>Congratulations!!</h1>
				<sub>
					You've hit the jackpot and claimed victory with your sharp eyes and quick
					reflexes. Your dedication and keen attention to detail have paid off, making you
					the true bingo champion. Enjoy your well-deserved success and revel in the
					excitement of your accomplishment. Keep enjoying the game and may you continue
					to have many more thrilling wins in the future!
				</sub>

				<div className="modal__buttons">
					<ButtonLink path="reload">Play Again</ButtonLink>
				</div>
			</CustomModal>

			{memoizedHeader}
			<div className={layoutClassName}>{children}</div>
			{memoizedParallax}
		</main>
	);
};

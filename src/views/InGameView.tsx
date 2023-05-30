import { Board, TicketDrawer, ButtonLink, CustomModal } from "components";
import { usePlayerStore } from "stores";
import { Layout } from "layout";
import { useModal } from "hooks";

import Confetti from "react-confetti";

type gameMode = {
	mode: "singleplayer" | "multiplayer";
};

export const InGameView = (props: gameMode) => {
	const { mode } = props;

	const { playerDidWin } = usePlayerStore();

	const { openModal, isModalOpen } = useModal({
		delay: 0,
	});

	if (playerDidWin) {
		openModal();
	}

	return (
		<Layout showHeader>
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
					<ButtonLink path="/">Quit</ButtonLink>
				</div>
			</CustomModal>
			{mode === "singleplayer" && <TicketDrawer />}
			<Board mode={mode} />
		</Layout>
	);
};

export default InGameView;

import { useEffect } from "react";
import { Brand, ButtonLink, Button, CustomModal } from "components";
import { Layout } from "layout";
import { useModal } from "hooks";
import { usePlayerStore } from "stores";

export const StartView = () => {
	const { openModal, closeModal, isModalOpen } = useModal({ delay: 0 });
	const { resetPlayerCards } = usePlayerStore();

	useEffect(() => {
		resetPlayerCards();
	}, []);

	return (
		<Layout centered contentCentered>
			<Brand />

			<CustomModal isOpen={isModalOpen} onClose={closeModal}>
				<h1>Multiplayer</h1>
				<sub>
					Play with your friends and family. One of you will be the gamemaster, and the
					rest will be participants. The gamemaster will pull tickets from the ticket
					pool, and the participants will mark the games on their bingo board. The first
					participant to have all the games that the gamemaster is looking for wins.
				</sub>

				<div className="modal__buttons">
					<ButtonLink path="/multiplayer/master">Play as Gamemaster</ButtonLink>
					<ButtonLink path="/multiplayer/game">Play as Participant</ButtonLink>
				</div>
			</CustomModal>

			<ButtonLink path="/singleplayer">Singleplayer</ButtonLink>
			<Button handler={() => openModal()}>Multiplayer</Button>
		</Layout>
	);
};

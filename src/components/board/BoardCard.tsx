import { Card } from "./partials";
import { usePlayerStore, useDrawnCardsStore } from "stores";
import { useCheckPatterns } from "hooks";
import { winningPattern } from "data";

import star from "assets/images/star.png";

type gameMode = {
	mode: "singleplayer" | "multiplayer";
};

type BoardSquareProps = {
	CardId: string;
	card?: {
		id: number;
		title: string;
	};
	index: number;
} & gameMode;

export const BoardCard = (props: BoardSquareProps) => {
	const { index, card, CardId = "", mode } = props;
	const { id = 999, title = "" } = card || {};

	const { playerCards, addToPlayerCards } = usePlayerStore();
	const { drawnCards } = useDrawnCardsStore();

	const isOnBoard = playerCards.includes(CardId);

	const isMatchingCard =
		playerCards.includes(CardId) &&
		winningPattern.some((pattern) =>
			pattern.every((cardId) => playerCards.includes(cardId))
		);

	const handleClick = () => {
		if (isOnBoard) return;

		if (mode === "singleplayer" && drawnCards.includes(id)) {
			addToPlayerCards(CardId);
		}

		if (mode === "multiplayer") {
			addToPlayerCards(CardId);
		}
	};

	useCheckPatterns();

	if (index === 12) {
		return (
			<div className="board-card special">
				<img src={star} alt="star" />
			</div>
		);
	}

	return (
		<Card
			className="board-card"
			handler={handleClick}
			onBoard={isOnBoard}
			isMatchingCard={isMatchingCard}
		>
			{title}
		</Card>
	);
};

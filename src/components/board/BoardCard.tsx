import { Card } from "./partials";
import { usePlayerStore, useDrawnCardsStore } from "stores";
import { checkPatterns } from "hooks";
import { useEffect } from "react";

type BoardSquareProps = {
	CardId: string;
	card?: {
		id: number;
		title: string;
	};
};

export const BoardCard = (props: BoardSquareProps) => {
	const { card, CardId = "" } = props;
	const { id = 999, title = "" } = card || {};

	const { playerCards, addToPlayerCards, setPlayerDidWin, setPlayerBingoCount } =
		usePlayerStore();
	const isOnBoard = playerCards.includes(CardId);

	const { drawnCards } = useDrawnCardsStore();
	const achievedPatterns = checkPatterns(playerCards);
	const isBingo = achievedPatterns.length > 0;

	const isMatchingCard = achievedPatterns.some((pattern) => pattern.includes(CardId));

	useEffect(() => {
		setPlayerBingoCount(achievedPatterns.length);

		if (isBingo) {
			setPlayerDidWin(true);
		}
	}, [achievedPatterns.length, setPlayerBingoCount]);

	const handleClick = () => {
		if (isOnBoard) return;

		if (drawnCards.includes(id)) {
			addToPlayerCards(CardId);
		}
	};

	return (
		<Card
			className="board-card"
			handler={handleClick}
			onBoard={isOnBoard}
			isMatchingCard={isMatchingCard}
			label={title}
		/>
	);
};

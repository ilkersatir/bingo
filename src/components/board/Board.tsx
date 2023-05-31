import { useEffect, useState } from "react";
import { BoardCard } from "./BoardCard";
import { BoardCardStar } from "./BoardCardStar";
import { gameTitles } from "data";

type GameTitle = {
	id: number;
	title: string;
};

export const Board = () => {
	const boardMatrix = [0, 1, 2, 3, 4];
	const letters = ["a", "b", "c", "d", "e"];
	const [shuffledGameTitles, setShuffledGameTitles] = useState<GameTitle[]>([]);

	useEffect(() => {
		const shuffledTitles: GameTitle[] = gameTitles.sort(() => Math.random() - 0.5);
		shuffledTitles.splice(12, 0, { id: 999, title: "" });

		setShuffledGameTitles(shuffledTitles);
	}, []);

	return (
		<div className="board">
			{boardMatrix.map((row, key) => {
				return (
					<div className="board__row" key={key}>
						{boardMatrix.map((col) => {
							const index = row * 5 + col;
							const id = letters[col] + (row + 1);
							const game = shuffledGameTitles[index];

							if (index === 12) {
								return <BoardCardStar key={col} />;
							}

							return <BoardCard CardId={id} card={game} key={col} />;
						})}
					</div>
				);
			})}
		</div>
	);
};

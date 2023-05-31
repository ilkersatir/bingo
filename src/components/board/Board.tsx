import { BoardCard } from "./BoardCard";
import { useShuffledCards } from "hooks";

export const Board = () => {
	const boardMatrix = [0, 1, 2, 3, 4];
	const letters = ["a", "b", "c", "d", "e"];

	const games = useShuffledCards();

	return (
		<div className="board">
			{boardMatrix.map((row, key) => {
				return (
					<div className="board__row" key={key}>
						{boardMatrix.map((col) => {
							const index = row * 5 + col;

							// Generate the ID using row and col values
							const id = letters[col] + (row + 1);

							const game = games[index];
							return <BoardCard CardId={id} card={game} index={index} key={col} />;
						})}
					</div>
				);
			})}
		</div>
	);
};

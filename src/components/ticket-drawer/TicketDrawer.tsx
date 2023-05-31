import { useCardDrawing } from "hooks";
import { gameTitles } from "data";
import { TicketDisplay } from "./partials";

export const TicketDrawer = () => {
	const { drawnCards, drawCard } = useCardDrawing();

	return (
		<div className="drawer drawer--player">
			<TicketDisplay
				drawnCards={drawnCards}
				gameTitles={gameTitles}
				drawCard={drawCard}
			/>
		</div>
	);
};

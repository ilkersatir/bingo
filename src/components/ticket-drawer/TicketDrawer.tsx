import { useCardDrawing } from "hooks";
import { gameTitles } from "data";
import { Ticket, TicketCounter } from "./partials";
import { MAX_ITERATIONS } from "config";

export const TicketDrawer = () => {
	const { drawnCards, drawCard } = useCardDrawing();

	const stopTimer = drawnCards.length >= MAX_ITERATIONS;

	if (!drawnCards.length) {
		return (
			<div className="drawer drawer--player">
				<Ticket className="drawer__ticket pop-in">
					Ready In {<TicketCounter drawCard={drawCard} stopTimer={stopTimer} />} Seconds
				</Ticket>
			</div>
		);
	}

	if (stopTimer) {
		return (
			<div className="drawer drawer--player">
				<Ticket className="drawer__ticket pop-in">No More Tickets Left</Ticket>
			</div>
		);
	}

	return (
		<div className="drawer drawer--player">
			{drawnCards.slice(-1).map((number, index) => {
				const game = gameTitles.find((game) => game.id === number);
				const title = game ? game.title : "";

				return (
					<Ticket className="drawer__ticket pop-in" key={index}>
						{title}
						<TicketCounter
							drawCard={drawCard}
							stopTimer={stopTimer}
							drawnCards={drawnCards}
						/>
					</Ticket>
				);
			})}
		</div>
	);
};

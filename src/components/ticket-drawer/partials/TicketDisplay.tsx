import { Ticket, TicketCounter } from ".";
import { MAX_ITERATIONS } from "config";

type TicketDrawerProps = {
	drawnCards: number[];
	gameTitles: { id: number; title: string }[];
	drawCard: () => void;
};

export const TicketDisplay = (props: TicketDrawerProps) => {
	const { drawnCards, gameTitles, drawCard } = props;

	const stopTimer = drawnCards.length >= MAX_ITERATIONS;

	if (!drawnCards.length) {
		return (
			<Ticket className="drawer__ticket pop-in">
				Ready In {<TicketCounter drawCard={drawCard} stopTimer={stopTimer} />} Seconds
			</Ticket>
		);
	}

	if (stopTimer) {
		return <Ticket className="drawer__ticket pop-in">No More Tickets Left</Ticket>;
	}

	return (
		<>
			{drawnCards.slice(-1).map((number, index) => {
				const game = gameTitles.find((game) => game.id === number);
				const title = game ? game.title : "";

				return (
					<Ticket className="drawer__ticket pop-in" key={index}>
						{title}{" "}
						<TicketCounter
							drawCard={drawCard}
							stopTimer={stopTimer}
							drawnCards={drawnCards}
						/>
					</Ticket>
				);
			})}
		</>
	);
};

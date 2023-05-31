import { Ticket, TicketCounter } from ".";
import { MAX_ITERATIONS } from "config";

type TicketDrawerProps = {
	drawnCards: number[];
	gameTitles: { id: number; title: string }[];
};

export const TicketDisplay = (props: TicketDrawerProps) => {
	const { drawnCards, gameTitles } = props;

	if (drawnCards.length === 0) {
		return (
			<Ticket className="drawer__ticket pop-in">
				Ready In {<TicketCounter />} Seconds
			</Ticket>
		);
	}

	if (drawnCards.length >= MAX_ITERATIONS) {
		return <Ticket className="drawer__ticket pop-in">No More Tickets Left</Ticket>;
	}

	return (
		<>
			{drawnCards.slice(-1).map((number, index) => {
				const game = gameTitles.find((game) => game.id === number);
				const title = game ? game.title : "";

				return (
					<Ticket className="drawer__ticket pop-in" key={index}>
						{title} <TicketCounter />
					</Ticket>
				);
			})}
		</>
	);
};

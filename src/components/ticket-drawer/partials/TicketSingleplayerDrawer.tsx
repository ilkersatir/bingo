import { Ticket, TicketCounter } from ".";

type TicketDrawerProps = {
	drawnCards: number[];
	gameTitles: { id: number; title: string }[];
};

export const TicketSingleplayerDrawer = (props: TicketDrawerProps) => {
	const { drawnCards, gameTitles } = props;

	return (
		<>
			{drawnCards.length === 0 && (
				<Ticket className="drawer__ticket pop-in">
					Ready In {<TicketCounter />} Seconds
				</Ticket>
			)}

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

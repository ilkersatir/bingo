import { Ticket } from ".";
import { Button } from "components";
import { MAX_ITERATIONS } from "config";

type TicketDrawerProps = {
	drawnCards: number[];
	gameTitles: { id: number; title: string }[];
	drawCard: () => void;
};

export const TicketMultiplayerDrawer = (props: TicketDrawerProps) => {
	const { drawnCards, gameTitles, drawCard } = props;

	return (
		<>
			<div className="ticket-scroller">
				{drawnCards.length > 0 ? (
					drawnCards.map((cardId, index) => {
						const game = gameTitles.find((game) => game.id === cardId);
						const title = game ? game.title : "";

						return (
							<Ticket key={cardId} className="drawer__ticket draw-with-total pop-in">
								{title}
								<span className="draw-total">
									{index} / {MAX_ITERATIONS}
								</span>
							</Ticket>
						);
					})
				) : (
					<Ticket className="drawer__ticket pop-in">No cards drawn</Ticket>
				)}
			</div>

			<Button handler={() => drawCard()} variant="square-big">
				Draw Ticket
			</Button>
		</>
	);
};

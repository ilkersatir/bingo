import { useEffect, useRef } from "react";
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

	const ticketScrollerRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		if (ticketScrollerRef.current) {
			ticketScrollerRef.current.scrollTop = ticketScrollerRef.current.scrollHeight;
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [drawnCards]);

	return (
		<>
			<div className="ticket-scroller" ref={ticketScrollerRef}>
				{drawnCards.length > 0 ? (
					drawnCards.map((cardId, index) => {
						const game = gameTitles.find((game) => game.id === cardId);
						const title = game ? game.title : "";

						return (
							<Ticket key={cardId} className="drawer__ticket draw-with-total pop-in">
								{title}
								<span className="draw-total">
									{index + 1} / {MAX_ITERATIONS}
								</span>
							</Ticket>
						);
					})
				) : (
					<Ticket className="drawer__ticket pop-in">No cards drawn</Ticket>
				)}
			</div>

			{drawnCards.length < MAX_ITERATIONS && (
				<Button
					handler={() => {
						drawCard();
						scrollToBottom();
					}}
					variant="square-big"
				>
					Draw Ticket
				</Button>
			)}
		</>
	);
};

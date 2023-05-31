import { useState, useEffect } from "react";
import { useDrawnCardsStore } from "stores";
import { useCardDrawing } from "hooks";
import { DEFAULT_TIME_TO_DRAW, MAX_ITERATIONS } from "config";

export const TicketCounter = () => {
	const countdownTimer = DEFAULT_TIME_TO_DRAW / 1000;
	const [countdown, setCountdown] = useState(countdownTimer);

	const { drawnCards } = useDrawnCardsStore();
	const { drawCard } = useCardDrawing();

	const stopTimer = drawnCards.length >= MAX_ITERATIONS;

	useEffect(() => {
		const timer = setInterval(() => {
			if (stopTimer) return;
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		if (countdown === 0) {
			drawCard();
			setCountdown(countdownTimer);
		}

		return () => clearInterval(timer);
	}, [countdown, drawCard, countdownTimer, stopTimer]);

	if (stopTimer) return null;

	return (
		<div className="counter_container">
			<div className="ticket__counter--bubble">{countdown}</div>
		</div>
	);
};

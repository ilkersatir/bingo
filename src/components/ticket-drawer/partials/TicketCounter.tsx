import { useState, useEffect } from "react";
import { DEFAULT_TIME_TO_DRAW } from "config";

type TicketCounterProps = {
	drawCard: () => void;
	stopTimer: boolean;
	drawnCards?: number[];
};

export const TicketCounter = (props: TicketCounterProps) => {
	const { drawCard, stopTimer, drawnCards } = props;

	const [countdown, setCountdown] = useState(DEFAULT_TIME_TO_DRAW);

	useEffect(() => {
		const timer = setInterval(() => {
			if (stopTimer) return;
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		if (countdown <= 0) {
			if (drawnCards?.length === 11) {
				drawCard();
				return;
			}
			drawCard();
			setCountdown(DEFAULT_TIME_TO_DRAW);
		}

		return () => clearInterval(timer);
	}, [countdown, drawCard, stopTimer]);

	if (stopTimer) return null;

	return (
		<div className="counter_container">
			<div className="ticket__counter--bubble">{countdown}</div>
		</div>
	);
};

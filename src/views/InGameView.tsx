import { Board, TicketDrawer } from "components";
import { usePlayerStore } from "stores";
import { Layout } from "layout";

import Confetti from "react-confetti";

export const InGameView = () => {
	const { playerDidWin } = usePlayerStore();

	return (
		<Layout showHeader>
			{playerDidWin && (
				<Confetti numberOfPieces={250} gravity={0.05} friction={1} opacity={0.8} />
			)}

			<TicketDrawer />
			<Board />
		</Layout>
	);
};

export default InGameView;

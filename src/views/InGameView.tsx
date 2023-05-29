import { useEffect } from "react";
import { Board, TicketDrawer } from "components";
import { usePlayerStore } from "stores";
import { Layout } from "layout";

type gameMode = {
	mode: "singleplayer" | "multiplayer";
};

export const InGameView = (props: gameMode) => {
	const { mode } = props;

	const { resetPlayerCards } = usePlayerStore();

	useEffect(() => {
		resetPlayerCards();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout showHeader>
			{mode === "singleplayer" && <TicketDrawer />}
			<Board mode={mode} />
		</Layout>
	);
};

export default InGameView;

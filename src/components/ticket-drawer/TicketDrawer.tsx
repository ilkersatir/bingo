import { useCardDrawing } from "hooks";
import { gameTitles } from "data";
import { TicketSingleplayerDrawer, TicketMultiplayerDrawer } from "./partials";

type TicketDrawerProps = {
	controlledByGameMaster?: boolean;
};

export const TicketDrawer = (props: TicketDrawerProps) => {
	const { controlledByGameMaster } = props;

	const { drawnCards, drawCard } = useCardDrawing();

	const drawerClass = controlledByGameMaster
		? "drawer drawer--game-master"
		: "drawer drawer--player";

	return (
		<div className={drawerClass}>
			{!controlledByGameMaster && (
				<TicketSingleplayerDrawer drawnCards={drawnCards} gameTitles={gameTitles} />
			)}

			{controlledByGameMaster && (
				<TicketMultiplayerDrawer
					drawnCards={drawnCards}
					gameTitles={gameTitles}
					drawCard={drawCard}
				/>
			)}
		</div>
	);
};

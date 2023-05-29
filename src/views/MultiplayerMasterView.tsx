import { TicketDrawer } from "components";
import { Layout } from "layout";

export const MultiplayerMasterView = () => {
	return (
		<Layout centered showHeader>
			<TicketDrawer controlledByGameMaster />
		</Layout>
	);
};

import { useEffect } from "react";
import { Brand, ButtonLink } from "components";
import { Layout } from "layout";
import { usePlayerStore, useDrawnCardsStore } from "stores";

export const StartView = () => {
	const { resetPlayerCards } = usePlayerStore();
	const { resetDrawnCards } = useDrawnCardsStore();

	useEffect(() => {
		resetPlayerCards();
		resetDrawnCards();
	}, []);

	return (
		<Layout centered contentCentered>
			<Brand />
			<ButtonLink path="/singleplayer" style={{ width: "180px" }}>
				Play
			</ButtonLink>
		</Layout>
	);
};

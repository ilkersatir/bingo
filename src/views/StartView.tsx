import { useEffect } from "react";
import { Brand, ButtonLink, Button, CustomModal } from "components";
import { Layout } from "layout";
import { useModal } from "hooks";
import { usePlayerStore } from "stores";

export const StartView = () => {
	const { resetPlayerCards } = usePlayerStore();

	useEffect(() => {
		resetPlayerCards();
	}, []);

	return (
		<Layout centered contentCentered>
			<Brand />
			<ButtonLink path="/singleplayer">Play</ButtonLink>
		</Layout>
	);
};

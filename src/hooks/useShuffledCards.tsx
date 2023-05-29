import { gameTitles } from "data";
import { useState, useEffect } from "react";

export const useShuffledCards = () => {
	const [games, setGames] = useState(gameTitles);

	useEffect(() => {
		shuffleGames();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const shuffleGames = () => {
		const shuffledGames = [...games];
		for (let i = shuffledGames.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledGames[i], shuffledGames[j]] = [shuffledGames[j], shuffledGames[i]];
		}
		setGames(shuffledGames);
	};

	return games;
};

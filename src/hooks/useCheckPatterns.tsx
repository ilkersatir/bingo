import { winningPattern } from "data";

export const checkPatterns = (playerCards: string[]) => {
	const patterns = [];

	for (let i = 0; i < winningPattern.length; i++) {
		let cellExists = 0;

		for (let j = 0; j < 5; j++) {
			if (playerCards.includes(winningPattern[i][j])) {
				cellExists++;
			}
		}

		if (cellExists === 5) {
			patterns.push(winningPattern[i]);
		}
	}

	return patterns;
};

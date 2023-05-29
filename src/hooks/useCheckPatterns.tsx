import { useEffect, useCallback, useMemo } from "react";
import { usePlayerStore } from "stores";
import { winningPattern } from "data";

export const useCheckPatterns = () => {
	const { playerCards, setPlayerDidWin } = usePlayerStore();

	const achievedPatterns = useMemo(() => {
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
	}, [playerCards]);

	const checkPattern = useCallback(() => {
		if (achievedPatterns.length > 0) {
			setPlayerDidWin(true);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [achievedPatterns]);

	useEffect(() => {
		checkPattern();
	}, [checkPattern]);

	return;
};

import { useMemo, useState, useCallback } from "react";
import { useDrawnCardsStore } from "stores";
import { MAX_ITERATIONS } from "config";

export const useCardDrawing = () => {
	const [drawIndex, setDrawIndex] = useState(0);
	const { drawnCards, addToDrawnCards } = useDrawnCardsStore();

	const sequentialArray = useMemo(() => {
		const array = [];
		for (let i = 0; i < MAX_ITERATIONS; i++) {
			array.push(i);
		}
		return array;
	}, []);

	const drawCard = useCallback(() => {
		const nextCard = sequentialArray[drawIndex];

		addToDrawnCards((prevNumbers) => [...prevNumbers, nextCard]);
		setDrawIndex((prevIndex) => prevIndex + 1);
	}, [addToDrawnCards, drawIndex, sequentialArray]);

	const memoizedDrawnCards = useMemo(() => drawnCards, [drawnCards]);

	return { drawnCards: memoizedDrawnCards, drawCard };
};

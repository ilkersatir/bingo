import { useMemo, useState, useCallback } from "react";
import { useDrawnCardsStore } from "stores";
import { MAX_ITERATIONS } from "config";

const generateRandomArray = () => {
	const array: number[] = [];

	while (array.length < MAX_ITERATIONS) {
		const randomNumber = Math.floor(Math.random() * MAX_ITERATIONS);

		if (!array.includes(randomNumber)) {
			array.push(randomNumber);
		}
	}

	return array;
};

export const useCardDrawing = () => {
	const [drawIndex, setDrawIndex] = useState(0);
	const { drawnCards, addToDrawnCards } = useDrawnCardsStore();

	const randomArray = useMemo(() => generateRandomArray(), []);

	const drawCard = useCallback(() => {
		addToDrawnCards((prevNumbers) => [...prevNumbers, randomArray[drawIndex]]);
		setDrawIndex((prevIndex) => prevIndex + 1);
	}, [addToDrawnCards, drawIndex, randomArray]);

	const memoizedDrawnCards = useMemo(() => drawnCards, [drawnCards]);

	return { drawnCards: memoizedDrawnCards, drawCard };
};

import { create } from "zustand";

type Store = {
	playerDidWin: boolean;
	setPlayerDidWin: (update: boolean) => void;

	playerBingoCount: number;
	setPlayerBingoCount: (update: number) => void;

	playerCards: string[];
	addToPlayerCards: (card: string) => void;

	resetPlayerCards: () => void;
};

export const usePlayerStore = create<Store>((set) => {
	return {
		playerDidWin: false,
		setPlayerDidWin: (update) => set(() => ({ playerDidWin: update })),

		playerBingoCount: 0,
		setPlayerBingoCount: (update) => set(() => ({ playerBingoCount: update })),

		playerCards: ["c3"],
		addToPlayerCards: (card) => {
			set((state) => {
				if (!state.playerCards.includes(card)) {
					return { playerCards: [...state.playerCards, card] };
				}
				return state;
			});
		},

		resetPlayerCards: () =>
			set((state) => ({
				playerCards: ["c3"],
				playerDidWin: false,
				playerBingoCount: 0,
			})),
	};
});

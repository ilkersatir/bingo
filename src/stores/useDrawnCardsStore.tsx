import { create } from "zustand";

type Store = {
	drawnCards: number[];
	addToDrawnCards: (update: (prevNumbers: number[]) => number[]) => void;
	resetDrawnCards: () => void;
};

export const useDrawnCardsStore = create<Store>((set) => ({
	drawnCards: [],
	addToDrawnCards: (update) => set((state) => ({ drawnCards: update(state.drawnCards) })),
	resetDrawnCards: () => set({ drawnCards: [] }),
}));

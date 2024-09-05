import { create } from "zustand";

interface ToggleSearchInput {
  isOpen: boolean;
  toggle: () => void;
}
interface SetDate {
  date: "day" | "week";
  setDay: () => void;
  setWeek: () => void;
}
export const useToggleSearchInput = create<ToggleSearchInput>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useSetDate = create<SetDate>((set) => ({
  date: "day",
  setDay: () => set({ date: "day" }),
  setWeek: () => set({ date: "week" }),
}));

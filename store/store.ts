import { create } from "zustand";

type Store = {
  zIndex: number;
  changeZIndex: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useStore = create<Store>()((set) => ({
  zIndex: 1,
  changeZIndex: (event: React.ChangeEvent<HTMLInputElement>) =>
    set(() => ({ zIndex: parseFloat(event.target.value) })),
}));

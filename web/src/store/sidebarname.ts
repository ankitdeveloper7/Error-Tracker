import { create } from "zustand";

type sidebarState = {
  name: string;
  updatesidebarname: (val: string) => void;
};

export const usesetSidebarname = create<sidebarState>((set) => ({
  name: "Dashboard",
  updatesidebarname: (val) => set({ name: val }),
}));

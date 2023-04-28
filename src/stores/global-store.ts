import { create } from "zustand";

const useGlobalStore = create<GlobalStore>(
  (set): GlobalStore => ({
    searchTitle: "",
    setSearchTitle: (title: string) =>
      set({ searchTitle: title.length >= 3 ? title : null }),
    isCartDrawer: false,
    setCartDrawer: (isCartDrawer: boolean) => set({ isCartDrawer }),
  })
);

export default useGlobalStore;

import { create } from "zustand";

const useGlobalStore = create<GlobalStore>(
  (set): GlobalStore => ({
    searchTitle: "",
    setSearchTitle: (title: string) =>
      set({ searchTitle: title.length >= 3 ? title : null }),
  })
);

export default useGlobalStore;

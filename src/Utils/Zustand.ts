import create from 'zustand';

// Definisikan tipe untuk state dan actions
interface SortState {
  sortOrder: 'name-asc' | 'name-desc' 
  setSortOrder: (order: 'name-asc' | 'name-desc' ) => void;
}

const useSortStore = create<SortState>((set) => ({
  sortOrder: 'name-asc', 
  setSortOrder: (order) => set({ sortOrder: order }),
}));

export default useSortStore;

import { create } from 'zustand/react'

type CategoryNavStoreState = {
   activeId: number
   setActiveId: (id: number) => void
}

export const useCategoryNavStore = create<CategoryNavStoreState>()(set => ({
   activeId: 1,
   setActiveId: (activeId: number) => set({ activeId }),
}))

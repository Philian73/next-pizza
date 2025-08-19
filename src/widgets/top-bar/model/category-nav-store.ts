import { create } from 'zustand/react'

type CategoryNavStoreState = {
   activeCategory: string
   setActiveCategory: (id: string) => void
}

export const useCategoryNavStore = create<CategoryNavStoreState>()(set => ({
   activeCategory: '',
   setActiveCategory: (activeCategory: string) => set({ activeCategory }),
}))

import { create } from 'zustand'

export const useCartStore = create((set) => ({
  items: [],
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id)
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
    }
    return { items: [...state.items, { ...product, quantity: 1 }] }
  }),
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.id !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0)
  })),
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    return useCartStore.getState().items.reduce((total, item) => total + (item.price * item.quantity), 0)
  },
  getItemCount: () => {
    return useCartStore.getState().items.reduce((count, item) => count + item.quantity, 0)
  }
}))

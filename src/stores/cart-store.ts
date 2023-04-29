import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: ItemData[];
  totalItems: number;
  totalPrice: number;
  // quantity: number;
}

interface Actions {
  addToCart: (Item: ItemData /* quantity: number */) => void;
  removeFromCart: (Item: ItemData) => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  // quantity: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      // quantity: INITIAL_STATE.quantity,
      addToCart: (product: ItemData /* quantity: number */) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item /* quantity: quantity + 1 */ }
              : item
          );

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.info.price,
            // quantity: state.quantity + 1,
          }));
        } else {
          const updatedCart = [...cart, { ...product /* quantity: 1 */ }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.info.price,
            // quantity: state.quantity + 1,
          }));
        }
      },
      removeFromCart: (product: ItemData) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - product.info.price,
          // quantity: state.quantity - 1,
        }));
      },
    }),
    {
      name: "cart-storage",
      // getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
      // version: 1, // State version number,
      // migrate: (persistedState: unknown, version: number) => {
      // 	if (version === 0) {
      // 		// if the stored value is in version 0, we rename the field to the new name
      // 		persistedState.totalProducts = persistedState.totalItems
      // 		delete persistedState.totalItems
      // 	}

      // 	return persistedState as State & Actions
      // },
    }
  )
);

import { create } from 'zustand';
import { IProduct } from '@/types/types';

interface State {
  cart: IProduct[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: IProduct) => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<State & Actions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: (product: IProduct) => {
    const cart = get().cart;
    const cartItem = cart.find((item: IProduct) => item.id === product.id);

    if (cartItem) {
      const updateCart = cart.map((item: IProduct) =>
        item.id === product.id
          ? { ...item, quantity: (item.count as number) + 1 }
          : item
      );
      set((state: State) => ({
        cart: updateCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const updateCart = [...cart, { ...product, count: 1 }];

      set((state: State) => ({
        cart: updateCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },
  removeFromCart: (product: IProduct) =>
    set((state: State) => ({
      cart: state.cart.filter((item: IProduct) => item.id !== product.id),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - product.price,
    })),
}));

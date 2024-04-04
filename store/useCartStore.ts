import { create } from 'zustand';
import { IProduct } from '@/types/types';

interface State {
  cart: IProduct[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (product: IProduct, qtd: number) => void;
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
  addToCart: (product: IProduct, qtd: number) => {
    const cart = get().cart;
    const cartItem = cart.find((item: IProduct) => item.id === product.id);

    if (cartItem) {
      const updateCart = cart.map((item: IProduct) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity as number) + qtd }
          : item
      );
      set((state: State) => ({
        cart: updateCart,
        totalItems: state.totalItems + qtd,
        totalPrice: state.totalPrice + product.price * qtd,
      }));
    } else {
      const updateCart = [...cart, { ...product, quantity: qtd }];

      set((state: State) => ({
        cart: updateCart,
        totalItems: state.totalItems + qtd,
        totalPrice: state.totalPrice + product.price * qtd,
      }));
    }
  },
  removeFromCart: (product: IProduct) =>
    set((state: State) => ({
      cart: state.cart.filter((item: IProduct) => item.id !== product.id),
      totalItems: state.totalItems - (product.quantity as number),
      totalPrice:
        state.totalPrice - product.price * (product.quantity as number),
    })),
}));

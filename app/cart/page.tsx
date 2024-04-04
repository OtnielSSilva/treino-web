'use client';

import CartItem from '@/components/CartItem';
import { useCartStore } from '@/store/useCartStore';

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce(
    (acc, product) => acc + product.price * (product.count as number),
    0
  );

  return (
    <section className='w-full pt-10 mb-20'>
      <div className='w-3/5 m-auto'>
        <ul className='bg-slate-50'>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <div className='flex justify-between items-center mt-6 bg-gray-100'>
          <span className='text-lg font-bold'>Total:</span>
          <span className='text-xl font-bold'>${total.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}

'use client';

import CartItem from '@/components/CartItem';
import { useCartStore } from '@/store/useCartStore';

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce(
    (acc, product) => acc + product.price * (product.quantity as number),
    0
  );

  return (
    <section className='w-full pt-10 mb-20'>
      <div className='w-2/4 m-auto bg-slate-50 p-10'>
        <h1 className='text-4xl font-bold'>
          {cart.length === 0
            ? 'Seu carrinho de compras está vazio'
            : 'Carrinho de compras'}
        </h1>
        <hr className='m-2' />
        <ul className=''>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <div className='flex justify-between items-center mt-6'>
          <span className='text-lg font-bold'>Total:</span>
          <span className='text-xl font-bold'>R${total.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}

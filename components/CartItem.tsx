import { useCartStore } from '@/store/useCartStore';
import { IProduct } from '@/types/types';
import Image from 'next/image';

interface ProductProps {
  product: IProduct;
}

function QuantitySelector({ product }: ProductProps) {
  return (
    <div className=''>
      <button
        className='bg-inherit text-red-500 hover:text-red-600 p-2'
        onClick={(e) => {
          const quantity = document.getElementById(
            product.id.toString()
          ) as HTMLInputElement;
          if (Number(quantity.value) > 1)
            quantity.value = String(Number(quantity.value) - 1);
        }}
      >
        -
      </button>
      <input
        className='w-10 text-center rounded '
        type='number'
        defaultValue='1'
        id={product.id.toString()}
      />
      <button
        className='bg-inherit text-green-500 hover:text-green-600 hover:scale-50 p-2'
        onClick={(e) => {
          const quantity = document.getElementById(
            product.id.toString()
          ) as HTMLInputElement;
          quantity.value = String(Number(quantity.value) + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default function CartItem({ product }: ProductProps) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <li className='flex justify-between items-center gap-4  mb-2 shadow-md p-4'>
      <div className='flex'>
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className='w-11 h-11'
        />
        <div className='flex-col ml-5 text-center '>
          <h3>{product.title}</h3>
          <QuantitySelector product={product} />
        </div>
      </div>
      <div>
        <button
          title='Remove Item'
          className='text-red-500 hover:text-red-600 ml-4 bg-gray-100'
          onClick={() => removeFromCart(product)}
        >
          X
        </button>
      </div>
    </li>
  );
}

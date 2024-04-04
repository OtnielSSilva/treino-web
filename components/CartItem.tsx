import { useCartStore } from '@/store/useCartStore';
import { IProduct } from '@/types/types';
import Image from 'next/image';

interface ProductProps {
  product: IProduct;
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
          <p className='text-orange-600'>{product.quantity}</p>
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

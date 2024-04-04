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
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
        />
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

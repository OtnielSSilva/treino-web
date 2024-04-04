'use client';
import { IProduct } from '../../types/types';
import styles from './product.module.css';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const { title, image, price, originalPrice, onSale } = product;
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt={title}
        height={0}
        width={0}
        sizes='100vw'
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: '8px',
        }}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        {onSale && originalPrice && (
          <span className={styles.originalPrice}>
            R$ {originalPrice.toFixed(2)}
          </span>
        )}
        <span className={styles.salePrice}>R$ {price.toFixed(2)}</span>
      </p>
      {/* <div className={styles.quantitySelector}>
        <button
          className={styles.quantityButton}
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
          className={styles.quantityInput}
          type='number'
          defaultValue='1'
          id={product.id.toString()}
        />
        <button
          className={styles.quantityButton}
          onClick={(e) => {
            const quantity = document.getElementById(
              product.id.toString()
            ) as HTMLInputElement;
            quantity.value = String(Number(quantity.value) + 1);
          }}
        >
          +
        </button>
      </div> */}
      <QuantitySelector product={product} />
      <button
        className={styles.addToCartButton}
        onClick={() => {
          const quantity = document.getElementById(
            product.id.toString()
          ) as HTMLInputElement;
          const input = document.getElementById(
            product.id.toString()
          ) as HTMLInputElement;
          addToCart(product, quantity.valueAsNumber);
          input.value = '1';
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

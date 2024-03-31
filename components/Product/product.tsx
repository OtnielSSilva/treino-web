'use client';
import { IProduct } from '../../types/types';
import styles from './product.module.css';
import Image from 'next/image';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const { title, image, price, originalPrice, onSale } = product;

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
      <div className={styles.quantitySelector}>
        <button className={styles.quantityButton}>-</button>
        <input
          className={styles.quantityInput}
          type='number'
          defaultValue='1'
        />
        <button className={styles.quantityButton}>+</button>
      </div>
      <button className={styles.addToCartButton}>Adicionar</button>
    </div>
  );
};

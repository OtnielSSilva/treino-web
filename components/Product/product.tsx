'use client';
import styled from 'styled-components';
import { IProduct } from '../../types/types';
import styles from './product.module.css';
import Image from 'next/image';

interface ProductProps {
  product: IProduct;
}

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

const QuantityButton = styled.button`
  background: #f2f2f2;
  border: 1px solid #ccc;
  padding: 8px 12px;
  margin: 0 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e2e2e2;
  }

  user-select: none;
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 8px;
`;

const AddToCartButton = styled.button`
  background-color: #008cba;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 12px; // Mais espaço antes do botão

  &:hover {
    background-color: #005f6b;
    transform: scale(1.05);
  }
`;

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

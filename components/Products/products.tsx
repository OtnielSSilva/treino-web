'use client';
import { useEffect, useState } from 'react';
import { Product } from '../Product/product';
import { IProduct } from '../../types/types';
import { fetchProducts } from '../../services/data';
import styles from './products.module.css';

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  // li da lista faltando
  return (
    <div>
      <ul className={styles.listproducts}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

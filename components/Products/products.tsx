'use client';
import { useEffect, useState } from 'react';
import { Product } from '../Product/product';
import { IProduct } from '../../types/types';
import { fetchProducts } from '../../services/fetchProducts';
import { fetchProductsByName } from '@/services/fetchProductsByName';
import styles from './products.module.css';

interface ProductsProps {
  name?: string;
  search?: boolean;
}

export const Products = ({ name, search }: ProductsProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (search) {
      fetchProductsByName(name ?? '').then((data) => setProducts(data));
    } else {
      fetchProducts().then((data) => setProducts(data));
    }
  }, []);

  return (
    <div>
      <ul className={styles.listproducts}>
        {products.map((product) => (
          <Product key={product.produto_id} product={product} />
        ))}
      </ul>
    </div>
  );
};

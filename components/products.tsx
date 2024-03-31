'use client';
import { useEffect, useState } from 'react';
import { Product } from './Product/product';
import { IProduct } from '../types/types';
import styled from 'styled-components';
import { fetchProducts } from '../services/data';

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <StyledList>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </StyledList>
    </div>
  );
};

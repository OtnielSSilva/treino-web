'use client';
import styled from 'styled-components';
import { IProduct } from '../types/types';

interface ProductProps {
  product: IProduct;
}

const StyledProduct = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const StyledImage = styled.img`
  height: 150px;
  width: 150px;
`;

export const Product = ({ product }: ProductProps) => {
  const { title, image, price } = product;
  return (
    <StyledProduct>
      {title.length <= 40 ? <h3>{title}</h3> : <h3>{title.slice(0, 40)}</h3>}
      <StyledImage src={image} alt={title} />
      <p>Preço: R${price}</p>
    </StyledProduct>
  );
};

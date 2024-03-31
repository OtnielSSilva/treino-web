'use client';
import styled from 'styled-components';
import { IProduct } from '../types/types';

interface ProductProps {
  product: IProduct;
}

const StyledProduct = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 280px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: 16px; /* Espaçamento aumentado */
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2);
  }

  @media (min-width: 768px) {
    width: calc(50% - 32px); 
    margin: 16px; /* Assegura que o espaçamento permaneça consistente em telas maiores */
  }

  @media (min-width: 1024px) {
    width: calc(33.333% - 32px); 
    margin: 16px; /* Assegura que o espaçamento permaneça consistente em telas maiores */
  }
`;
const StyledImage = styled.img`
 height: 150px; 
 width: 100%; 
 object-fit: cover; 
 border-radius: 4px; 
 margin-bottom: 8px; 
`;

const Title = styled.h3`
  font-size: 16px; 
  color: #333;
  margin: 8px 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold; 
  max-width: 90%; 
`;

const Price = styled.p`
  font-size: 19px;
  color: #333;
  font-weight: bold;
  margin: 10px 0 20px; // Mais espaço antes e depois do preço
  display: flex;
  flex-direction: column;
`;

const OriginalPrice = styled.span`
  font-size: 14px;
  color: #777;
  text-decoration: line-through; // Efeito de preço original riscado
  margin-bottom: 8px;
`;

const SalePrice = styled.span`
  color: #d00; // Cor para destacar o preço de venda
`;


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
    <StyledProduct>
      <StyledImage src={image} alt={title} />
      <Title>{title}</Title>
      <Price>
        {onSale && originalPrice && <OriginalPrice>R$ {originalPrice.toFixed(2)}</OriginalPrice>}
        <SalePrice>R$ {price.toFixed(2)}</SalePrice>
      </Price>
      <QuantitySelector>
        <QuantityButton>-</QuantityButton>
        <QuantityInput type="number" defaultValue="1" />
        <QuantityButton>+</QuantityButton>
      </QuantitySelector>
      <AddToCartButton>Adicionar</AddToCartButton>
    </StyledProduct>
  );
};
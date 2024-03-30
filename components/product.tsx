'use client';
import styled from 'styled-components';
import { IProduct } from '../types/types';

interface ProductProps {
  product: IProduct;
}

const StyledProduct = styled.div`
  background-color: #fff;
  width: 280px; 
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  margin: 16px; 
  padding: 16px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-radius: 8px; 
  transition: transform 0.3s; 
  &:hover {
    transform: translateY(-4px); 
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2); 
  }
`;

const StyledImage = styled.img`
 height: 150px;
 width: 150px;
 object-fit: cover; 
 border-radius: 4px; 
 margin-bottom: 8px; 
`;

const Title = styled.h3`
  font-size: 18px; /* Tamanho de fonte maior */
  color: #333; /* Cor de texto mais escura para melhor leitura */
  margin: 8px 0; /* Espaço acima e abaixo do título */
  height: 48px; /* Altura fixa para manter alinhamento dos produtos */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = styled.p`
  font-size: 16px; /* Tamanho de fonte visível mas não dominante */
  color: #2c5cc5; /* Cor para destacar o preço */
  font-weight: bold; /* Faz o preço ficar em negrito */
  margin-top: 12px; /* Espaço antes do preço */
`;

export const Product = ({ product }: ProductProps) => {
  const { title, image, price } = product;
  return (
    <StyledProduct>
      <StyledImage src={image} alt={title} />
      <Title>{title.length <= 40 ? title : `${title.slice(0, 37)}...`}</Title>
      <Price>Preço: R${price}</Price>
    </StyledProduct>
  );
};
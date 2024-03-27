import styled from "styled-components";
import { IProduct } from "../types/types";

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
`;

const StyledImage = styled.img`
	height: 200px;
	width: 200px;
`;

export const Product = ({ product }: ProductProps) => {
	const { title, image, price } = product;
	return (
		<StyledProduct>
			<h3>{title}</h3>
			<StyledImage src={image} alt={title} />
			<p>Preço: R${price}</p>
		</StyledProduct>
	);
};

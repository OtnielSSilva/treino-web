import { useEffect, useState } from "react";
import { fetchProducts } from "../data";
import { Product } from "./product";
import { IProduct } from "../types/types";
import styled from "styled-components";

const StyledProducts = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const StyledList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const Products = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		fetchProducts().then((data) => setProducts(data));
	}, []);

	return (
		<StyledProducts>
			<StyledList>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</StyledList>
		</StyledProducts>
	);
};

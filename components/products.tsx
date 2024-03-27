"use client";
import { useEffect, useState } from "react";
import { Product } from "./product";
import { IProduct } from "../types/types";
import styled from "styled-components";
import { fetchProducts } from "../services/data";

const StyledProducts = styled.div`
	width: 77%;
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

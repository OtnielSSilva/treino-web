import axios from "axios";

const API_URL = "https://fakestoreapi.com/products/";

const apiService = axios.create({
	baseURL: API_URL,
});

export const fetchProducts = async () => {
	const response = await apiService.get("/");
	return response.data;
};

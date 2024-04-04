export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  onSale?: boolean;
  rating?: number;
  category?: string;
  count?: number; // quantity, but different name in the api
}

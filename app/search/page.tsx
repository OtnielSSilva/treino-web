'use client';

import { fetchProductsByName } from '@/services/fetchProductsByName';
import { IProduct } from '@/types/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState(localStorage.getItem('search') ?? '');
  const [refresh, setRefresh] = useState<boolean>(
    Boolean(localStorage.getItem('refresh')) ?? false
  );

  useEffect(() => {
    if (search !== '') {
      fetchProductsByName(search).then((data) => setProducts(data));
      localStorage.removeItem('search');
      localStorage.removeItem('refresh');
      setProducts([]);
    }
  }, [search]);

  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {refresh &&
          products.map((product: IProduct) => (
            <li key={product.produto_id}>{product.nome}</li>
          ))}

        {!refresh && <li>Search for a product</li>}
      </ul>
    </div>
  );
};

export default SearchPage;

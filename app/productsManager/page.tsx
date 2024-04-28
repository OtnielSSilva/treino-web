'use client';
import React, { useState } from 'react';
import styles from './manageProducts.module.css';
import { IProduct } from '@/types/types';

export default function ManageProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [newProduct, setNewProduct] = useState({
    produto_id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    categoria_id: '',
    estoque: 0,
    ativo: true,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      setProducts(
        products.map((p) =>
          p.produto_id === newProduct.produto_id ? newProduct : p
        )
      );
    } else {
      const nextId =
        products.reduce(
          (maxId, product) => Math.max(product.produto_id, maxId),
          0
        ) + 1;
      setProducts([...products, { ...newProduct, produto_id: nextId }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setNewProduct({
      produto_id: 0,
      nome: '',
      descricao: '',
      preco: 0,
      categoria_id: '',
      estoque: 0,
      ativo: true,
    });
    setIsEditing(false);
  };

  const editProduct = (product: IProduct) => {
    setNewProduct(product);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    resetForm();
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Gerenciamento de Produtos</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='nome'
            value={newProduct.nome}
            onChange={handleInputChange}
            placeholder='Nome do Produto'
          />
          <input
            type='number'
            name='preco'
            value={newProduct.preco}
            onChange={handleInputChange}
            placeholder='Preço'
          />
          {isEditing ? (
            <>
              <button type='submit' className={styles.updateButton}>
                Atualizar
              </button>
              <button
                type='button'
                onClick={cancelEdit}
                className={styles.cancelButton}
              >
                Cancelar
              </button>
            </>
          ) : (
            <button type='submit' className={styles.addButton}>
              Adicionar
            </button>
          )}
        </form>
      </div>
      <div className={styles.productList}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.produto_id} className={styles.productItem}>
              <span>{product.nome}</span>
              <span>R$ {product.preco}</span>
              <div className={styles.productActions}>
                <button
                  onClick={() => editProduct(product)}
                  className={styles.editButton}
                >
                  Editar
                </button>
                <button
                  onClick={() =>
                    setProducts(
                      products.filter(
                        (p) => p.produto_id !== product.produto_id
                      )
                    )
                  }
                  className={styles.removeButton}
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum produto cadastrado.</p>
        )}
      </div>
    </main>
  );
}

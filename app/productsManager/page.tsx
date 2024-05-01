'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './manageProducts.module.css';
import { IProduct } from '@/types/types';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const categories = [
  { id: 1, name: 'Carnes' },
  { id: 2, name: 'Laticínios' },
  { id: 3, name: 'Frutas' },
  { id: 4, name: 'Legumes e Verduras' },
  { id: 5, name: 'Produtos de limpeza' },
  { id: 6, name: 'Grãos e Cereais' },
  { id: 7, name: 'Laticínios' },
  { id: 8, name: 'Ovos e Padaria' },
];

const units = [
  { id: 1, name: 'Kg' },
  { id: 2, name: 'Gramas' },
  { id: 3, name: 'Unidade' },
];

export default function ManageProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [newProduct, setNewProduct] = useState({
    produto_id: 0,
    nome: '',
    descricao: '',
    preco: '',
    categoria_id: '',
    estoque: '',
    unidade: '',
    ativo: true,
  });
  const [isEditing, setIsEditing] = useState(false);

  const validateForm = () => {
    const fields = [
      'nome',
      'descricao',
      'preco',
      'categoria_id',
      'estoque',
      'unidade',
    ];
    const missingFields = [];

    fields.forEach((field) => {
      if (!newProduct[field]) {
        missingFields.push(field);
      }
    });

    return missingFields;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newValue =
      name === 'preco' || name === 'estoque'
        ? value
          ? parseFloat(value)
          : ''
        : value;
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingFields = validateForm();

    if (missingFields.length > 0) {
      toast.error(
        `Por favor, preencha os seguintes campos: ${missingFields.join(', ')}`
      );
      return;
    }

    const updatedProducts = products.map((p) =>
      p.produto_id === newProduct.produto_id
        ? {
            ...newProduct,
            preco: Number(newProduct.preco),
            estoque: Number(newProduct.estoque),
          }
        : p
    );

    if (isEditing) {
      setProducts(updatedProducts);
    } else {
      const nextId =
        products.reduce((max, p) => Math.max(p.produto_id, max), 0) + 1;
      setProducts([
        ...products,
        {
          ...newProduct,
          produto_id: nextId,
          preco: Number(newProduct.preco),
          estoque: Number(newProduct.estoque),
        },
      ]);
    }

    resetForm();
  };

  const resetForm = () => {
    setNewProduct({
      produto_id: 0,
      nome: '',
      descricao: '',
      preco: '',
      categoria_id: '',
      estoque: '',
      unidade: '',
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
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Gerenciamento de Produtos</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='nome'
            value={newProduct.nome}
            onChange={handleInputChange}
            placeholder='Nome do Produto'
            maxLength={20}
          />
          <input
            type='text'
            name='descricao'
            value={newProduct.descricao}
            onChange={handleInputChange}
            placeholder='Descrição'
            maxLength={25}
          />
          <input
            type='number'
            name='preco'
            value={newProduct.preco}
            onChange={handleInputChange}
            placeholder='Valor em R$'
            maxLength={10}
          />
          <select
            name='categoria_id'
            value={newProduct.categoria_id}
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value=''>Selecione uma Categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className={styles.quantityAndUnit}>
            <input
              type='number'
              name='estoque'
              value={newProduct.estoque}
              onChange={handleInputChange}
              placeholder='Quantidade em KG/G/U'
              className={styles.quantityInput}
            />
            <select
              name='unidade'
              value={newProduct.unidade}
              onChange={handleInputChange}
              className={styles.unitSelect}
            >
              <option value=''>Unidade ou Kg</option>
              {units.map((unit) => (
                <option key={unit.id} value={unit.name}>
                  {unit.name}
                </option>
              ))}
            </select>
          </div>

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
              <h3>
                {product.nome.length > 20
                  ? product.nome.substring(0, 20) + '...'
                  : product.nome}
              </h3>
              <p className={styles.productDescription}>
                {product.descricao.length > 25
                  ? product.descricao.substring(0, 25) + '...'
                  : product.descricao}
              </p>
              <p>Preço: R$ {Number(product.preco).toFixed(2)}</p>
              <p>
                Categoria:{' '}
                {categories.find(
                  (c) => c.id.toString() === product.categoria_id
                )?.name || 'Sem categoria'}
              </p>
              <p>
                Estoque: {product.estoque}{' '}
                {units.find((u) => u.name === product.unidade)?.name ||
                  'Sem unidade'}
              </p>
              <div className={styles.productActions}>
                <button
                  onClick={() => editProduct(product)}
                  className={styles.editButton}
                  title='Editar'
                >
                  <FaPencilAlt />
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
                  title='Remover'
                >
                  <FaTrashAlt />
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

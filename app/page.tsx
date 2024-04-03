'use client';
import React from 'react';
import Hero from '@/components/Hero/hero';
import styles from './page.module.css';
import { Products } from '@/components/Products/products';

const heroSlides = [
  {
    title: 'Páscoa Feliz',
    description: 'Chocolates a partir de: R$ 9,90',
    backgroundImage:
      'https://images.unsplash.com/photo-1584304733729-975b63a51b71?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Oferta de Verão',
    description: 'Aproveite os dias de sol com descontos especiais',
    backgroundImage:
      'https://images.unsplash.com/photo-1562261150-0989084c593e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Volta às Aulas',
    description: 'Tudo o que você precisa para um retorno triunfal',
    backgroundImage:
      'https://images.unsplash.com/photo-1602542165989-999c53234fdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero slides={heroSlides} />
      <Products />
    </main>
  );
}

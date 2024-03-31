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
      'https://img.freepik.com/fotos-gratis/operacao-atm-no-banco_1359-1207.jpg?w=1060&t=st=1711851571~exp=1711852171~hmac=48e175e23cfd6a50154c462899028c0181991817b3f2a1b0b784ee2ed60ad210',
  },
  {
    title: 'Oferta de Verão',
    description: 'Aproveite os dias de sol com descontos especiais',
    backgroundImage:
      'https://img.freepik.com/fotos-gratis/operacao-atm-no-banco_1359-1207.jpg?w=1060&t=st=1711851571~exp=1711852171~hmac=48e175e23cfd6a50154c462899028c0181991817b3f2a1b0b784ee2ed60ad210',
  },
  {
    title: 'Volta às Aulas',
    description: 'Tudo o que você precisa para um retorno triunfal',
    backgroundImage:
      'https://img.freepik.com/fotos-gratis/operacao-atm-no-banco_1359-1207.jpg?w=1060&t=st=1711851571~exp=1711852171~hmac=48e175e23cfd6a50154c462899028c0181991817b3f2a1b0b784ee2ed60ad210',
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

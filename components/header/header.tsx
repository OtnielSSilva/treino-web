'use client';
import Link from 'next/link';
import MenuButton from '../menuButton/menuButton';
import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href={'/'} className={styles.freeLink}>
        <h1 className={styles.logo}>Projetão Store</h1>
      </Link>
      <div>
        <input
          type='text'
          placeholder='Pesquise no MyStore...'
          className={styles.input}
        />
        <button className={styles.button}>Search</button>
      </div>
      <div className={styles.buttonContainer}>
        <MenuButton href='/login' title='Login' />
        <MenuButton href='/register' title='Register' />
        <MenuButton href='/cart' title='Cart' />
      </div>
    </div>
  );
};

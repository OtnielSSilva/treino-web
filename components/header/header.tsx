'use client';
import Link from 'next/link';
import MenuButton from '../menuButton/menuButton';
import styles from './header.module.css';
import cartIcon from '../../public/cart.svg';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';

export const Header = () => {
  const cart = useCartStore((state) => state.totalItems);

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
        <Link href='/cart' className='link'>
          <div className={styles.cart}>
            <Image src={cartIcon} alt='Cart' width={24} height={24} />
            <span className={styles.cartNumber}>{cart as number}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

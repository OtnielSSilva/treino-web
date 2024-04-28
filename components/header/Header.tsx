'use client';
import Link from 'next/link';
import MenuButton from '../menuButton/menuButton';
import styles from './header.module.css';
import cartIcon from '../../public/cart.svg';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import { redirect } from 'next/navigation';
import SearchInput from '../SearchInput';

export const Header = () => {
  const cart = useCartStore((state) => state.totalItems);

  return (
    <div className={styles.header}>
      <Link href={'/'} className={styles.freeLink}>
        <h1 className={styles.logo}>Projetão Store</h1>
      </Link>
      <div>
        <SearchInput classNameProps={styles.input} />
      </div>
      <div className={styles.buttonContainer}>
        <MenuButton href='/login' title='Login' />
        <MenuButton href='/register' title='Register' />
        <MenuButton href='/productsManager' title='Gerenciar Produtos' />
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

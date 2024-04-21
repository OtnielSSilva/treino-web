'use client';
import Link from 'next/link';
import './menuButton.css';

interface Props {
  href: string;
  title: string;
}

export default function MenuButton({ href, title }: Props) {
  return (
    <Link href={href} className='link'>
      <button className='menuButton'>{title}</button>
    </Link>
  );
}

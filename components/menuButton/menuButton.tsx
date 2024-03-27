'use client';
import Link from 'next/link';
import styled from 'styled-components';
import './menuButton.css';

interface Props {
  href: string;
  title: string;
}

const StyledButton = styled.button`
	background-color: #555;
	color: white;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
	&:hover {
		background-color: #777;`;

export default function MenuButton({ href, title }: Props) {
  return (
    <Link href={href} className='link'>
      <button>{title}</button>
    </Link>
  );
}
